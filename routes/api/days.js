var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');
const Day = db.model('day');

router.get('/', (req, res, next) => {
	console.log("hello")
	Day.findAll()
	.then(days => {
		console.log(days)
		res.json({days : 'ofourlives'});
	})
	.catch(next);
});

router.get('/:id', (req, res, next) => {
	Day.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(foundDay => {
		res.json(foundDay);
	})
	.catch(next);
});

// router.post('/:id/:attraction' (req, res, next) => {

// })

// router.delete('/:id/:attraction' (req, res, next) => {
// 	// :|
// })



module.exports = router;