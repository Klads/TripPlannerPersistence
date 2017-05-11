const Sequelize = require('sequelize');
const db = require('./_db');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

const Day = db.define('day', {
	number: {
		type: Sequelize.INTEGER,
		validate: {
			max: 7,
			min: 1
		}
	}
})

Day.hasOne(Hotel);
Day.hasMany(Activity);
Day.hasMany(Restaurant);

module.exports = Day;