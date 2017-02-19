var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/biseccion',function(req,res,next){
	res.render('biseccion');
});
router.get('/polinomios',function(req,res,next){
	res.render('polinomios');
});
router.get('/secante',function(req,res,next){
	res.render('secante');
});
router.get('/reglaF',function(req,res,next){
	res.render('reglaF');
});
router.get('/newton',function(req,res,next){
	res.render('newton');
});
router.get('/newtonM',function(req,res,next){
	res.render('newtonM');
});
router.get('/muller',function(req,res,next){
	res.render('muller');
});
router.get('/steffensen',function(req,res,next){
	res.render('steffensen');
});



module.exports = router;
