const express = require("express");
const { UserController } = require("../controllers");
const { verifyToken } = require("../middlewares");
const UserValidator = require("../validators/UserValidator");

const router = express.Router();

router.patch(
  "/users",
  verifyToken,
  UserValidator.update,
  UserController.update
);
router.patch(
  "/users/follow/:id",
  verifyToken,
  UserValidator.follow,
  UserController.follow
);

router.patch(
  "/users/unfollow/:id",
  verifyToken,
  UserValidator.follow,
  UserController.unfollow
);

module.exports = router;
