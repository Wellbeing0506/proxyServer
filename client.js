var request = require('request');
for(var i = 0 ; i< 1000; i++) {
request({body:{test2:i},method:"POST",url:'http://127.0.0.1:3000/server',json:true},function(error,response,body){
	if(error){
		console.log("Get error:",error);
		}
});
request({body:{test1:i},method:"POST",url:'http://127.0.0.1:3000/server',json:true},function(error,response,body){
	if(error){
		console.log("Get error:",error);
		}
});
request({body:{test1:i},method:"POST",url:'http://127.0.0.1:3000/server',json:true},function(error,response,body){
	if(error){
		console.log("Get error:",error);
		}
});
}

//request.post('http://127.0.0.1:8080/server',function(error,response,body){
//	console.log("Post error:",error);
//	console.log("Post statusCode:",response && response.statusCode);
//	console.log("Post body:",body);
//});
