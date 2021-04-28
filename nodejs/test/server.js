const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const main = require('./routes/main')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('viwe engine','html');
nunjucks.configure('views',{
    express:app
});
app.use('/',main)

app.listen(3300,()=>{
    console.log('server start port:3300');
});