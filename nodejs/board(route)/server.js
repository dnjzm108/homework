const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const main = require('./routes/index');
const board = require('./routes/board');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',main);
app.use('/board',board);


//첫번째 인자값 function 콜백함수
// app.get('/',(req,res)=>{
//     console.log('두번째 실행입니다');
//     res.send('hellow word')
// });

app.listen(3000,()=>{
  console.log('server start port:3000');
})