const express=require('express');
const socketIO=require('socket.io')
const app=express();
const path=require('path');
const server = app.listen(3000,()=>{
    console.log("Server started");
});
const io=socketIO(server);
app.use(express.static(path.join(__dirname)));

io.on('connect',(socket)=>{
   console.log("A user has connected to server"); 
   socket.on('chat message',msg=>{
    io.emit('chat message',msg);
   })
})

