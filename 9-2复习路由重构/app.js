var handler=require('./handle');
var router=require('./router');
var server=require('./server');
var handle={};
handle['/']=handler.index;
handle['/index']=handler.index;
handle['/api']=handler.api;
server.startServer(router.route,handle);