'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
//var express = require('express');
//var app = express();
var server = http.createServer(function(req,res){
    if(req.url === "/"){
        fs.readFile('./index.html','UTF-8', function(err, html){
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(html);
        });
    }
    else{
        res.writeHead(404,{'Content-type':'text/plain'})
            res.end('404 - File not found.');
    }
    
});

/*app.use(function(req,res,next){
    next();
});*/

/*app.get('/', function(req,res){
    
    res.html('index.html');
});*/

//app.use(express.static("./public"));

var port = Number(process.env.PORT || 3000);

server.listen(port);
console.log('Server running on port 3000');
