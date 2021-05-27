/*API 애플리케이션 프로그래밍 인터페이스
       특정파일     개발       보조장치 (마우스or키보드 같이)
       */

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log('server start port : 3000');
})