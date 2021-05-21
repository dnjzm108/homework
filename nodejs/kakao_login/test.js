const express =require('express');
const nunjucks = require('nunjucks');
const axios =require('axios');
const qs = require('qs');
const session = require('express-session');
const app = express();

app.use(session({
    secret:'asdf',
    resave:false,
    secure:false,
    saveUninitialized:false,
}));

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
});

const kakao ={
    clientID:'d71e574bb53209815ff9a1eedf9d85dd',
    clientSecret:'hLAJzSnEQyKo2fujTV2saFCGixSySbHg',
    redirectUri:'http://localhost:3000/auth/kakao/callback'
}

app.get('/',(req,res)=>{
    res.render('./main.html')
})

app.get('/auth/kakao',(req,res)=>{
    const kakaoAuthURL=`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`;
    res.redirect(kakaoAuthURL);
})
app.get('/auth/kakao/callback',async (req,res)=>{
    let token;
    try{
        token = await axios({
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            }, // npm install qs
            data:qs.stringify({
                grant_type:'authorization_code', // 특정 스트링 
                client_id:kakao.clientID,
                client_secret:kakao.clientSecret,
                redirectUri:kakao.redirectUri,
                code:req.query.code,
            })
        })
    }catch(err){
        res.json(err.data)
    }
    let user;
    try{
        user = await axios({
            method:'GET',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization:`Bearer ${token.data.access_token}`
            }
        })
    }catch(err){
        res.json(err.data)
    }
    console.log(token);
    console.log(user);
    req.session.kakao = user.data;
    res.redirect('/')
});

app.get('/auth/info',(req,res)=>{
    console.log(req.session);
    let {nickname,profile_image}=req.session.kakao.properties;
    res.render('./info.html',{
        nickname,profile_image
    });
})

app.listen(3000,()=>{
    console.log('start 3000');
})
