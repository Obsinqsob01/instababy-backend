const express = require("express");
const { verify } = require("jsonwebtoken");
const PostController = require("../controllers/PostController");
const { verifyToken } = require("../middlewares");
const { PostValidator } = require("../validators");

const router = express.Router();

router.post("/posts", verifyToken, PostValidator.create, PostController.create);
router.patch(
  "/posts/:id/comment",
  verifyToken,
  PostValidator.createComment,
  PostController.createComment
);
router.delete(
  "/posts/:id/comment",
  PostValidator.removeComment,
  PostController.removeComment
);

module.exports = router;
