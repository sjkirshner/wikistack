
// express stuff
var express = require('express');
var router = express.Router();

//sequelize stuff

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');


router.get('/', index.html);
