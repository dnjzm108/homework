const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/',(req,res)=>{
    res.send({
        success:true,
    })
})

app.listen(3200,()=>{
    console.log('server start port: 3200');
})