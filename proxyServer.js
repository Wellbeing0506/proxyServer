var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req,res){
	proxy.web(req,res,{target:'http://127.0.0.1:8080/server'});
});
server.listen(3000);
