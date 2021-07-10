var express = require('express');
var router = express.Router();
var Data = require("../DB.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  var Category = [...new Map(Data.map(item => [item.type, item])).values()]
  console.log(Category)
  res.render('index',{Category});
});

/* GET home page. */
router.get('/c/:type', function(req, res, next) {
  var SpecifiCategory = req.params.type
  var NData = Data.filter(f=> f.type === SpecifiCategory)
  var Heading = [...new Map(NData.map(item => [item.type, item])).values()]
  var Nheading = Heading.map(h=>h.type)
  
  res.render('posters',{NData,Nheading});
});

/* GET cart page. */
router.get('/cart', function(req, res, next) {
  
  res.render('Cart');
  
  
});

module.exports = router;
