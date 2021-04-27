const express = require('express');
const router = express.Router(); // == app

router.get('/',(req,res)=>{
    res.render('index.html',{
        title:'안녕'
    })
});

module.exports=router;