const { UserService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const newUser = await UserService.create(body);

      res.status(201).json({
        payload: newUser,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
