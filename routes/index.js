var express = require('express');
var app = express();
var router = express.Router();



const wikiRouter = require('./wiki');
const userRouter = require('./user');
// ...
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);


module.exports = router;
// or, in one line: router.use('/wiki', require('./wiki'));


