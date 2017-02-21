var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/biseccion',function(req,res,next){
	res.render('methods/biseccion');
});
router.get('/polinomios',function(req,res,next){
	res.render('methods/polinomios');
});
router.get('/secante',function(req,res,next){
	res.render('methods/secante');
});
router.get('/reglaF',function(req,res,next){
	res.render('methods/reglaFalsa');
});
router.get('/newton',function(req,res,next){
	res.render('methods/newton');
});
router.get('/newtonM',function(req,res,next){
	res.render('methods/newtonM');
});
router.get('/muller',function(req,res,next){
	res.render('methods/muller');
});
router.get('/steffensen',function(req,res,next){
	res.render('methods/steffensen');
});



module.exports = router;
