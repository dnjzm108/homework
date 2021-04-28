const express = require('express');
const mysql = require('mysql')
const router = express.Router();


let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'homepage'
});

router.get('/',(req,res)=>{
    connection.query('select idx,subject,board_name,content,today,hit from board order by idx desc',(error,results)=>{
        if(error){
            console.log('error');
        }else{
            let total_record=results.length;
            results.forEach(ele=>{
                ele.number = total_record;
                total_record--;
                });
            res.render('./main.html',{
                list:results
            });
        }
    });
});

router.get('/view',(req,res)=>{
    connection.query(`update board set hit = hit + 1 where idx = ${req.query.idx}`)
    connection.query(`select subject,board_name,content from board where idx='${req.query.idx}' `,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('./view.html',{
                idx:req.query.idx,
                list:results
            });
        }
    });
});

router.get('/write',(req,res)=>{
    res.render('./write.html')
});
router.post('/write',(req,res)=>{
    let dot = req.body;
    connection.query(`insert into board (subject,board_name,content,hit) values ('${dot.subject}','${dot.name}','${dot.content}',0)`,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect(`/view?idx='${dot.idx}'`);
        }
    })
});
router.get('/update',(req,res)=>{
    connection.query(`select subject,board_name,content from board where idx='${req.query.idx}'`,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(req.query.idx);
            res.render('./update.html',{
                list:results,
                idx:req.query.idx
            });
        }
    });
});
router.post('/update',(req,res)=>{
    let dot = req.body;
    connection.query(`update board set subject='${dot.subject}',board_name='${dot.name}',content='${dot.content}' where idx='${dot.idx}'`,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(dot.content);
            console.log(dot.idx);
            res.redirect(`/view?idx=${dot.idx}`);
        }
    });
});
router.get('/del',(req,res)=>{
    connection.query(`delete from board where idx=${req.query.idx}`,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
})

module.exports = router;