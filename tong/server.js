const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const router = require('./routers/index');
const mysql2 = require('mysql2');
const mysql = require('mysql');

app.use(express.static('public'));
app.use('/',router);

server.listen(3000,()=>{
    console.log('server start port:3000');
})