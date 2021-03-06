const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','html')
nunjucks.configure('views',{
    express:app
})

app.get('/',(req,res)=>{
    res.render('main')
})
app.get('/login',(req,res)=>{
    //console.log(req.headers);
    let {userid,userpw} = req.query;
    console.log(userid,userpw);
    res.setTimeout(3000,()=>{
        res.send(`GET OK ${userid}/${userpw}`)
    })
    // res.send(`GET OK ${userid}/${userpw}`)
});
app.post('/login',(req,res)=>{
    let {userid,userpw} = req.body;
    console.log(userid,userpw);
    res.send(`POST OK ${userid}/${userpw}`)
})

app.listen(3500,()=>{
    console.log('server start :3500');
})

/*
HTTP 통신 프로토콜
Client <---->Server
*/