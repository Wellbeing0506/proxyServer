var request = require('request');
for(var i = 0 ; i< 1000; i++) {
	console.log("i",i);
request({body:{test:i},method:"POST",url:'http://127.0.0.1:3000',json:true},function(error,response,body){
	console.log("Get error:",error);
	console.log("Get statusCode:",response && response.statusCode);
	console.log("Get body:",body);
});
request({body:{test1:i},method:"POST",url:'http://127.0.0.1:3000',json:true},function(error,response,body){
	console.log("Get error:",error);
	console.log("Get statusCode:",response && response.statusCode);
	console.log("Get body:",body);
});
}

//request.post('http://127.0.0.1:8080/server',function(error,response,body){
//	console.log("Post error:",error);
//	console.log("Post statusCode:",response && response.statusCode);
//	console.log("Post body:",body);
//});
