const { PostService } = require("../services");

module.exports = {
  create: async (req, res) => {
    try {
      const { decoded, body } = req;
      body.user_id = decoded.id;

      const post = await PostService.create(body);

      return res.status(201).send({
        post,
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  },
  createComment: async (req, res) => {
    try {
      const { decoded, body } = req;
      const { id } = req.params;

      const comment = await PostService.createComment(id, decoded.id, body);

      res.status(201).send({
        comment,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
  removeComment: async (req, res) => {
    try {
      const { decoded, body } = req;
      const { id } = req.params;

      const comment = await PostService.removeComment(id, body.comment_id);

      res.status(200).send({
        comment,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  },
};
