const { default: axios } = require('axios');
const express = require('express');
const nunjucks = require('nunjucks');
const qs = require('qs');
const app = express();

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
})

const kakao={
    clientID:'d71e574bb53209815ff9a1eedf9d85dd',
    clientSecret:'hLAJzSnEQyKo2fujTV2saFCGixSySbHg',
    redirectUri:'http://localhost:3000/auth/kakao/callback'
}

app.get('/',(req,res)=>{
    res.render('main')
});

app.get('/auth/kakao',(req,res)=>{
    const kakaoAuthURL=`https://kauth.kakao.com/oauth.authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`;
    res.redirect(kakaoAuthURL);
})
app.get('/auth/kakao/callback',async(req,res)=>{
    let token;
    try{
        token= await axios({
            method:'post',
            url:'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            data:qsstringify({
                grant_type:'authorization_code',
                client_id:kakao.clientID,
                client_secret:kakao.clientSecret,
                redirectUri:kakao.redirectUri,
                code:req.query,code,
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
                Autorization:`Bearer ${token.data.access_token}`
            }
        })
    }catch(err){
        res.json(err,data)
    }
    console.log(token);
    console.log(user);
    req.session.kakao = user.data;
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log('server start : 3000');
})