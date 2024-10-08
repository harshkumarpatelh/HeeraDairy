'use strict';
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config.json')[env]


//db connection
const sequelize = new Sequelize(config);

module.exports = sequelize;