const express = require('express');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/users', UserController.create);

module.exports = router;
