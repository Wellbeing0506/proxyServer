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
		cluster.on('exit',function(worker,code,signal){
			console.log("exit",worker);
		});
} else {
	http.createServer(function(req,res){
		proxy.web(req,res,{target:'http://127.0.0.1:8080'});
	}).listen(3000);
	console.log("work",process.pid);
}
