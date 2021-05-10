const express = require('express');
const app = express();
const {sequelize,User} = require('./models/index');
const router = require('./routers/index');
const cors = require('cors');

app.use(cors());
app.use('/',router)

sequelize.sync({force:false})
.then(()=>{
    console.log('db접속 성공');
}).catch(()=>{
    console.log('db접속 실패');
})

app.listen(3200,()=>{
    console.log('server start port: 3200');
})