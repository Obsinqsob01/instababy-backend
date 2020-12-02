const { Post } = require("../models");

module.exports = {
  create: (body) => new Post(body).save(),
  createComment: (id, user_id, { comment }) =>
    Post.findByIdAndUpdate(id, { $push: { comments: { user_id, comment } } }),
  removeComment: (id, comment_id) =>
    Post.findByIdAndUpdate(id, { $pull: { comments: { _id: comment_id } } }),
};
