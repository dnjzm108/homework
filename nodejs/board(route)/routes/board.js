const express = require('express');
const mysql = require ('mysql');
const router = express.Router();


const config={
    host:'localhost',
    user:'root',
    password:'0000',
    database:'homepage'
}
let pool = mysql.createPool(config);

router.get('/',(req,res)=>{
    res.render('./board/index.html')
});


router.get('/list',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        connection.query('select idx,subject,board_name,content,hit,date_format(today,"%Y-%m-%d") as today from board order by idx desc',(error,results)=>{
            connection.release();
            if(error) console.log(error);
            let total_record=results.length;
            results.forEach(ele=>{
                ele.number = total_record;
                total_record--;
                });
                res.render('./board/list.html',{
                    list:results
                })
        })
    })
})
router.get('/view',(req,res)=>{
    pool.getConnection((err,connection)=>{
        connection.query(`update board set hit = hit + 1 where idx = ${req.query.idx}`);
        connection.query(`select idx,subject,board_name,content,hit,date_format(today,"%Y-%m-%d") as today from board where idx='${req.query.idx}'`,(error,results)=>{
            connection.release();
            if(error) throw console.log(error);
            res.render('./board/view.html',{
                idx:req.query.idx,
                list:results
            })
        })
    })
});

router.get('/write',(req,res)=>{
    res.render('./board/write.html')
})

router.post('/write',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`insert into board(subject,board_name,content,hit) values('${req.body.subject}','${req.body.board_name}','${req.body.content}',0)`,(error,results)=>{
            connection.release();
            if(error) throw error;
            res.redirect(`/board/view?idx=${results.insertId}`);
        })
    })
});

router.get('/update',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`select subject,board_name,content from board where idx='${req.query.idx}'`,(error,results)=>{
            connection.release();
            if(error) throw error;
            res.render('./board/update.html',{
                list:results,
                idx:req.query.idx
            })
        })
    })
})

router.post('/update',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if (err) throw err;
        connection.query(`update board set subject='${req.body.subject}',board_name='${req.body.board_name}',content='${req.body.content}' where idx='${req.body.idx}'`,(error,results)=>{
            connection.release();
            if(error) throw error
            res.redirect('/board/list')
        })
    })
})

router.post('/del',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`delete from board where idx='${req.query.idx}'`,(error,results)=>{
            connection.release();
            if(error) throw error;
            res.redirect('/board/list')
        })
    })
});

module.exports = router;