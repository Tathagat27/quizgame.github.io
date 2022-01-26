const http =require('http');
const express=require('express');
const socketio=require('socket.io');
const app=express();

app.use(express.static('${_dirname}/../script'));

const server=http.createServer(app);
const io=socketio(server);

io.on('connection',function(socket) {
    console.log('someone connected');
});

server.on('error',function(err){
    console.error(err);
});

server.listen(8080,function(){
    console.log('server is ready');
});