var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');

router.get("/", (req, res, next) => {
	res.send("HELLO WELCOME TO FOOD????");
	res.render('layout');
});

module.exports = router;