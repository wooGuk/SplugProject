var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')


  app.listen(8005);

function handler(req, res){

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
	this.room_name = 1;

	/*socket.on('set_room', function(data){
		socket.join(data.room_name);
		this.room_name = data.room_name;
	});*/

	socket.on('my other event', function(data){
		socket.emit("my_message",data); //나한테
		socket.broadcast.to(this.room_name).emit("message",data); //모두에게
	});

	socket.on('addBox', function(parentNum, box){
		socket.broadcast.to(this.room_name).emit("addBoxToParent", parentNum, box);
	});

	socket.on('addCanvas',function(data){
		socket.broadcast.to(this.room_name).emit("addCanvas", data);
	});
});