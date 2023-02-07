var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

// /note 에 접근하면 routes/note.js 로 연결되게 라우팅
router.use('/note', require('./note'));

module.exports = router;
