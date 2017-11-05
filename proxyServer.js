const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
		console.log("master",process.pid);
		for(let i = 0; i< numCPUs; i++){
			cluster.fork();
		}
		cluster.on('disconnect',function(worker,code,signal){
			console.error('disconnect');
			cluster.fork();
		});
} else {
	console.log("worker",process.pid);
	var domain = require('domain');
	var server = http.createServer(function(req,res){
		var d = domain.create();
		d.on('error',function(er){
			console.error('error',er.stack);
			try{
				var killtimer = setTimeout(function(){
					process.exit(1);
				},3000);
				killtimer.unref();
				server.close();
				cluster.worker.disconnect();
				res.statusCode = 500;
				res.setHeader('content-type', 'text/plain');
				res.end('Oops, there was a problem!\n');	
			} catch(er2) {
				console.error('error send 500!',er2.stack);
			}
		});
		d.add(req);
		d.add(res);
		d.run(function(){
			proxy.web(req,res,{target:'http://127.0.0.1:8080'});
		});
	});
	server.listen(3000);
}
//process.on('uncaughtException', function (err) {
//  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
//  console.error(err.stack)
//  process.exit(1)
//})
