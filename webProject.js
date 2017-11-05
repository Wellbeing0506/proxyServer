var http = require('http'),
    httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({ ws: true });
var server = http.createServer(function(req,res)
