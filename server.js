var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function(req,res){

    var pathObj = url.parse(req.url,true)
    // console.log(pathObj)
    
    switch(pathObj.pathname){
        case  '/getWeather':
        console.log('get weather')//测试请求是否发出去了
        res.end(JSON.stringify({beijing:'sunny'}))
        break;

        default:
        fs.readFile(path.join(__dirname,pathObj.pathname),function(e,data){
            if(e){
                res.writeHead(404,'Not Found')
                res.end('<h1>404 Not Found</h1>')
            }else{
                res.end(data)
            }
        })
    }
}).listen(8080)