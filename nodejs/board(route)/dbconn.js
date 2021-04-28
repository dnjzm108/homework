const mysql = require('mysql');

const config ={
    host : 'localhost',
    user : 'root',
    password: '0000',
    database: 'homepage',
}

const pool = mysql.createPool(config);

pool.getConnection((err,connection)=>{
    if(err) throw err;
    connection.query('select * from board',(error,results)=>{
        connection.release(); //반환하는 부분
        if(error) throw err;
        console.log(results);
    });
});

pool.getConnection((err,connection)=>{
    if(err)throw err;
    connection.query("select * from board",(error,results,field)=>{
        connection.release();
        if(error)throw error;
        console.log(results);
        console.log(field);
    })
});

