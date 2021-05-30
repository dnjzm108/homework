const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./routers/index');
const bodyParser = require('body-parser');
const cookieParser =require('cookie-parser');
const app = express();
const {sequelize} = require('./models');
const session = require('express-session');
sequelize.sync({force:false})
.then(()=>{
    console.log('접속성공');
})
.catch(()=>{
    console.log('접속실패');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
})
app.use(express.static('public'));
app.use('/',router);
app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
}))
app.listen(3000,()=>{
    console.log('server start port:3000');
})