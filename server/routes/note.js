const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// GET /note 할 때 아래의 코드 실행
router.get('/', noteController.readAll);

module.exports = router;
