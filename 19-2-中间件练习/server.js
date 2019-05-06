// 导入内置模块http
var http = require('http');

// 导入第三方模块express
var express = require('express');

// 定义负责log的middleware
function logger(request, response, next) { 
    console.log(request.method + ': ' + request.url); 
    next();// 调用下一个middleware
}

// 定义负责响应的middleware
function responser(request, response) {
    if (request.url === '/') {
        // return response.end('Welcome to Homepage!');
        return response.end('Welcome to Homepage!');
        console.log('嘎牙啊')
        // response.send('Welcome to Homepage!');
    }
    if (request.url === '/about') {
        return response.end('Welcome to About Page!');
    }
    response.end('404, Page Not Found!');
}

// 创建Express应用的对象
var app = express();

// 组建middleware栈，注意顺序
app.use(logger);
app.use(responser);

var server = http.createServer(app);
server.listen(3000);
console.log('服务启动');