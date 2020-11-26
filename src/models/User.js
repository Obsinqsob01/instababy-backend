const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  first_name: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default: 'http://lorempixel.com/400/200',
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
}, {
  timestamps: true,
});

const User = model('User', UserSchema);

module.exports = User;
