var handler=require('./handle');
var server=require('./server');
var router=require('./router')
var handle={};
handle['/']=handler['index'];
handle['/index']=handler['index'];
handle['/api']=handler['api'];
server.startServer(handle,router.route);