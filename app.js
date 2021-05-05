const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {User} = require('./models');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes')

//new Promise 객체입니다.force 접속을 했을때 테이블의 존재유무에 따라 새로만드냐 안 만드냐 
//force: false 생성하지 않음  true 생성함
// sequelize.sync({force:false,})
// .then(()=>{
//     console.log('db접속이 완료되었습니다.');
// })
// .catch(()=>{
//     console.log('db접속이 실패되었습니다.');
// }) 
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
});
app.use('/',indexRouter);

// app.get('/',async (req,res)=>{
//     // User.create({
//     //     name:'zero',
//     //     age:24,
//     //     married:false,
//     //     comment:'자기소개',
//     // })
//     const userList = await User.findAll({
//         attributes:['name','married']
//     });
//     console.log(userList);
//     res.send('hellow world')
// })

app.listen(3000,()=>{
    console.log('server start 3000');
})