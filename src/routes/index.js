const express = require("express");
const UserRouter = require("./UserRouter");
const PostRouter = require("./PostRouter");
const AuthRouter = require("./AuthRouter");

const router = express.Router();

router.use(UserRouter);
router.use(PostRouter);
router.use(AuthRouter);

module.exports = router;
