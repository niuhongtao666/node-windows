var startServer=require('./4-模块化思想');
var router=require('./router');
var handler=require('./handler');
var handle={};
handle['/']=handler.home;
handle['/home']=handler.home;
handle['/api_records']=handler.api_records;
startServer.startServer(router.route,handle);