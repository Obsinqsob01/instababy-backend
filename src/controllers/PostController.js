const { PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const { body } = req;

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
};
