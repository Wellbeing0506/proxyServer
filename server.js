var restify = require('restify');

function myGet(req,res,next){
	console.log("Server Get");
	res.send('myGet');
	return next();
}
function myPost(req,res,next){
	console.log("Server Post",req.body);
	res.send('myPost'+JSON.stringify(req.body));
	return next();
}

var server =restify.createServer();
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get("/server",myGet);
server.post("server",myPost);
server.listen(8080,function(){
	console.log('get:/server');
	console.log('post:/server');
	console.log('%s listening at %s', server.name, server.url);
});
