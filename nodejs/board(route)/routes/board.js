const express = require('express');
const mysql = require ('mysql');
const router = express.Router();

let connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1541',
    database:'homepage'
});
connection.connect();

router.get('/',(req,res)=>{
    res.render('./board/index.html')
});
    
router.get('/list',(req,res)=>{
    connection.query('select idx,subject,board_name,content,hit,date_format(today,"%Y-%m-%d") as today from board2 order by idx desc', (error, results) => {
        if (error) {
            console.log(error);
        } else {
            let total_record=results.length;
            results.forEach(ele=>{
                ele.number = total_record;
                total_record--;
                });
            res.render('./board/list.html', {
                list: results,  
            });
        }
    });
});
router.get('/view',(req,res)=>{
    connection.query(`update board set hit = hit + 1 where idx = ${req.query.idx}`)
    connection.query(`select idx,subject,board_name,content,hit,date_format(today,"%Y-%m-%d") as today from board2 where idx='${req.query.idx}'`, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('./board/view.html', {
                idx: req.query.idx,
                list: results
            });
        }
    });
});
router.get('/write',(req,res)=>{
    res.render('./board/write.html')
})
router.post('/write',(req,res)=>{
    connection.query(`insert into board2(subject,board_name,content,hit) values('${req.body.subject}','${req.body.board_name}','${req.body.content}',0)`, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect(`/board/view?idx=${results.insertId}`);
        }
    });
});

router.get('/update',(req,res)=>{
    connection.query(`select subject,board_name,content from board2 where idx='${req.query.idx}'`,(error, results) => {
        if (error) {
            console.log('error');
        } else {
            res.render('./board/update.html',{
                list:results,
                idx:req.query.idx
            });
        }
    });
});

router.post('/update', (req, res) => {
    connection.query(`update board2 set subject='${req.body.subject}',board_name='${req.body.board_name}',content='${req.body.content}' where idx='${req.body.idx}'`, (error, results) => {
        if (error) {
            console.log('error');
        } else {
            res.redirect('/board/list');
        }
    });
});
router.post('/del', (req, res) => {
    connection.query(`delete from board2 where idx='${req.query.idx}'`, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/board/list');       
        }
    });
});

module.exports = router;