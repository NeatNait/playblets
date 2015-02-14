var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');

  io.emit('user connected', {clientId:socket.id});
  socket.on('disconnect', function(socket){
    console.log('user disconnected', this.id);
  	io.emit('user disconnected', {clientId:this.id});
  });

  socket.on('player action', function(socket){
  	io.emit('screen action', {clientId:this.id});
  });

  socket.send(socket.id);
});