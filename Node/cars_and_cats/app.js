const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);
	if(request.url === '/cars'){
		fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/cars/new'){
		fs.readFile('./views/newcars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/images/car1.jpeg'){
		fs.readFile('./images/car1.jpeg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}	
	else if( request.url ==='/images/car2.jpeg'){
		fs.readFile('./images/car2.jpeg',function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/images/car3.jpeg'){
		fs.readFile('./images/car3.jpeg',function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/images/cat1.jpeg'){
		fs.readFile('./images/cat1.jpeg',function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/images/cat2.jpeg'){
		fs.readFile('./images/cat2.jpeg',function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else if( request.url ==='/images/cat3.jpeg'){
		fs.readFile('./images/cat3.jpeg',function(errors, contents){
			response.writeHead(200, {'Content-Type': 'images/jpeg'});
			response.write(contents);
			response.end();
		});
	}
	else{
		response.write(404);
		response.end('File not found! Duh!');
	}
});
server.listen(7077);
console.log("JUST TO BE SURE HERE THIS IS")