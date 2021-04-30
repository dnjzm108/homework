const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./main.html');
});

router.get('/write',(req,res)=>{
    res.render('./write.html')
});
module.exports=router;