const express = require('express');
const UserRouter = require('./UserRouter');
const PostRouter = require('./PostRouter');

const router = express.Router();

router.use(UserRouter);
router.use(PostRouter);

module.exports = router;
