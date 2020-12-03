const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      description: Joi.string(),
      img_url: Joi.string().uri().required(),
    }),
  }),
  createComment: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      comment: Joi.string().required(),
    }),
  }),
  removeComment: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      comment_id: Joi.string().required(),
    }),
  }),
  like: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      postId: Joi.string().required(),
    }),
  }),
};
