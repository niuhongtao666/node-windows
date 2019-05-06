var express=require('express');
var app = express()
var router = express.Router();

// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
  if (req.headers['x-auth']) return next('router')
  next()
},function (req, res, next) {
    res.send('regular')
  }
)

router.get('/', function (req, res) {
  res.send('hello, user!')
})
router.get('/home', function (req, res) {
    res.send('hello, user!home')
  })
  
  
// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
//   res.sendStatus(401)
    res.send('haha')
})
app.listen(3003);
console.log('启动服务');