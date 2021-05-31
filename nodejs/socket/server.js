const express = require('express');
const app = express();
//websocket 사용하기 위한 패키지 socket.io , http
const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socket(server);
const nunjucks = require('nunjucks');
app.use(express.static('./node_modules/socket.io/client-dist'))
app.set('view engine','html');
nunjucks.configure('views',{
    express:app
})

app.get('/',(req,res)=>{
    res.render('index')
});
//addE
io.sockets.on('connection',(socket)=>{
    socket.on('send',(data)=>{
        console.log(`클라이언트에서 받은 메세지 ${data.msg}`);
        socket.broadcast.emit('call',data.msg)
    })
})

server.listen(3500,()=>{
    console.log('server start : 3500');
})