var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')


  app.listen(8005);

function handler(req, res){
	console.log("asdasd");
	fs.readFile(__dirname +'/ppt_1.html',
		function (err, data){
		if(err)
		{
			res.writeHead(500);
			return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on('connection', function(socket) {
	var room_name = 1;

	/*socket.on('set_room', function(data){
		socket.join(data.room_name);
		this.room_name = data.room_name;
	});*/
	socket.on('my other event', function(data){
		socket.emit("my_message",data); // 나한테
		
			socket.broadcast.to(this.room_name).emit("message",data); // 연결된 사람한테
	});
	socket.on('paint event', function(data){
		
			socket.broadcast.to(this.room_name).emit("draw",data); // 연결된 사람한테
	});
});