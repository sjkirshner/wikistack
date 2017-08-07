
// express stuff
var express = require('express');
var router = express.Router();

//sequelize stuff

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');


router.get('/', index.html);

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  getterMethods: {
      route() {
        return '/wiki/' + this.urlTitle
    }
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
})

module.exports = {
  db: db,
  Page: Page,
  User: User
};
