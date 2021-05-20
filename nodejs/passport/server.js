const express =require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passportConfig = require('./passport/index');
const {sequelize, User} = require('./models');

const app = express();
app.use(bodyParser.urlencoded({extends:false}));
sequelize.sync({force:false})
.then(()=>{
    console.log('접속완료');
})
.catch(()=>{
    console.log('접속실패');
})

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
});


app.use((req,res,next)=>{
    req.ingoo = "seongjin"
    next()
})
passportConfig();
app.use(session({
    secret:'anything',
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use 미들웨어에 seeeiont 값을 설정해서 req.session 사용할수있게 함
app.get('/user',(req,res)=>{
    res.render('./index.html')
})
app.get('/board',(req,res)=>{
    res.render('./login.html');
})

app.get('/', async (req,res)=>{
   
   let find = await User.findAll({});
   console.log(find);
    res.render('./index.html',{
        find,
    })
})
app.post('/',async(req,res)=>{
    let body = req.body;
    let create = await User.create({
        userid:body.userid,userpw:body.userpw,username:body.username,
    })
    .then(
        console.log(create)
    )
    .catch(
        alert('내용이 없습니다')
    )
    res.redirect('/');
})


app.listen(3500,()=>{
    console.log('start 3500');
})