const express = require('express');
const nunjucks = require('nunjucks');
const main = require('./route/main');
const app = express();


app.set('view engine','html');
nunjucks.configure('views',{
    express:app
});
app.use('/',main);

app.listen(3100,()=>{
    console.log('server start port:3100');
})