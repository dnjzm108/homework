/* Autherication 인증 Authoization 허가 */

/*
 Rest api key :	d71e574bb53209815ff9a1eedf9d85dd 
 Redirect Uri : http://localhost:8000/auth/kakao/callback 
 secret key : 	hLAJzSnEQyKo2fujTV2saFCGixSySbHg
 profile account_email
*/

const express = require('express');
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'aaa',
    resave: false,
    secure: false,
    saveUninitialized: false,
}))
app.set('view engin', 'thml');
nunjucks.configure('views', {
    express: app,
})

const kakao = {
    clientID: 'd71e574bb53209815ff9a1eedf9d85dd',
    clientSecret: 'hLAJzSnEQyKo2fujTV2saFCGixSySbHg',
    redirectUri: 'http://localhost:3000/auth/kakao/callback'
}

app.get('/', (req, res) => {
    const { msg } = req.query;
    // console.log(req.session.authData);
    res.render('./main.html', {
        msg,
        logininfo: req.session.authData,
    });
})

app.get('/login', (req, res) => {
    res.render('./login.html');
})
app.post('/login2',(req,res)=>{
   console.log(req.headers);
  // res.setHeader('Content-Type','application/x-www-form-urlencoded')
    //res.send("ok")
    console.log(req.get('user-agent'));
    // req.set('content-type','application/x-www-form-urlencoded');
    console.log(req.body);
    res.set('Authorization',`Bearer 123456456786`) ;
    res.json({
        test:"ok",
     })
    //header 영역에서 status 값이 200대면 성공이고
    //300~400 은 에러
    // res.status(200).json({text:'error'});
});

app.post('/login', (req, res) => {
    // console.log(req.body);
    const { session, body } = req;
    const { userid, userpw } = body;
    //userid 과 userpw 값을 가지고 DB조회
    //userid root userpw root 일때 성공하는 시나리오 작성
    if (userid == "root" && userpw == "root") {
        //로그인 성공
        const data = {
            userid
        }

        session.authData = {
            ["local"]: data,
        }
        res.redirect('/?msg=로그인이 완료되었습니다.')
    } else {
        //로그인 실패
        res.redirect('/?msg=아이디와 패스워드를 확인해주세요.')
    }

})

app.get('/auth/kakao', (req, res) => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`;
    res.redirect(kakaoAuthURL);
})

app.get('/auth/kakao/callback', async (req, res) => {
    //axios => Promise Object  async await or then 사용
    const { session, query } = req;
    const { code } = query; //req.query.code -> code
    let token;
    try {
        token = await axios({
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }, // npm install qs
            data: qs.stringify({
                grant_type: 'authorization_code', // 특정 스트링 
                client_id: kakao.clientID,
                client_secret: kakao.clientSecret,
                redirectUri: kakao.redirectUri,
                code,
                //code:req.query.code,
            }) // 객체를 String으로 변환.

        })
    } catch (err) {
        res.json(err.data)
    }
    let user;
    try {
        user = await axios({
            method: 'GET',
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                Authorization: `Bearer ${token.data.access_token}`
            }
        })
    } catch (err) {
        res.json(err.data)
    }
    // console.log(token);
    // console.log(user);

    const authData = {
        ...token.data,
        ...user.data,
    }
    session.authData = {
        ["kakao"]: authData,
    }
    // console.log(session);
    // req.session.kakao = user.data;

    // req.session={
    //     ['kakao'] : user.data,
    // }

    res.redirect('/')

});

const authMiddleware = (req, res, next) => {
    const { session } = req;
    if (session.authData == undefined) {
        // console.log('로그인이 되어있지않음')
        res.redirect('/?msg=로그인이 안되있음')
    } else {
        // console.log('로그인이 되어있음');
        next();
    }
}

app.get('/auth/info', authMiddleware, (req, res) => {

    const { authData } = req.session;
    const provider = Object.keys(req.session.authData)[0];

    let userinfo = {}
    switch (provider) { //값이 나오는 변수
        case "kakao":
            userinfo = {
                userid: authData[provider].properties.nickname,
            }
            break;
        case "local":
            userinfo = {
                userid: authData[provider].userid,
            }
            break;
    }
    res.render('./info.html', {
        userinfo,
    });
})

app.get('/auth/kakao/unlink', authMiddleware, async (req, res) => {
    const { session } = req;
    const { access_token } = session.authData.kakao;

    // console.log(access_token);
    let unlink;
    try {
        unlink = await axios({
            method: "POST",
            url: "https://kapi.kakao.com/v1/user/unlink",
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    } catch (error) {
        res.json(error.data)
    }
    console.log(unlink.data); //이값이 떨어진 이유는 카카오 측에서는 우리 아이디를 로그아웃 or 회원탈퇴 완료.
    //세션을 지워줘야 한다.
    const { id } = unlink.data;

    if (session.authData["kakao"].id == id) {
        delete session.authData;
    }
    res.redirect('/?msg=로그아웃 되셨습니다.')
})

app.get('/auth/logout', (req, res) => {
    const { session } = req;
    const { authData } = session;
    const provider = Object.keys(req.session.authData)[0];
    switch (provider) {
        case "local":
            delete session.authData;
            res.redirect('/?msg=로그아웃되셨습니다/')
            break;
        case "kakao":
            res.redirect('/auth/kakao/unlink');
            break;
    }
})

app.listen(3000, () => {
    console.log("server start port:3000");
})