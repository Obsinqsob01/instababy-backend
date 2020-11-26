const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  description: {
    type: String,
  },
  img_url: {
    type: String,
    reuired: true,
    default: 'http://lorempixel.com/400/200',
  },
  user_likes: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  comments: [{
    comment: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  }],
}, {
  timestamps: true,
});

const Post = model('Posts', PostSchema);

module.exports = Post;
