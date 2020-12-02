const express = require("express");
const { UserController } = require("../controllers");
const { UserValidator } = require("../validators");

const router = express.Router();

router.post("/login", UserValidator.login, UserController.login);
router.post("/signup", UserValidator.create, UserController.create);

module.exports = router;
