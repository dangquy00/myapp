var express = require('express');
var Promise = require('promise');
var router = express.Router();
var iws_ifind = require("../api/iws_ifind");
/* GET home page. */
var homeData = {}
router.get('/', function(req, res, next) {
  var actions = [
		Promise.resolve(iws_ifind.getBrandList(function(data){homeData.brandList = data;})),
		Promise.resolve(iws_ifind.getCategoryDeal(function(data){homeData.muasam = data;}, 4)),
		Promise.resolve(iws_ifind.getCategoryDeal(function(data){homeData.amthuc = data}, 1,1,6)),
		Promise.resolve(iws_ifind.getCategoryDeal(function(data){homeData.lamdep = data;}, 2,1,3)),
		Promise.resolve(iws_ifind.getCategoryDeal(function(data){homeData.dulich = data}, 6,1,3))
  ];
  Promise.all(actions).then(values => {

    res.render("homepage/index",{data:homeData});
  })
  
});

module.exports = router;
