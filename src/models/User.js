const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const UserSchema = Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    profile_img: {
      type: String,
      default: "http://lorempixel.com/400/200",
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
    followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    following: [{ type: Schema.Types.ObjectId, ref: "users" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
  },
  {
    timestamps: true,
  }
);

// eslint-disable-next-line prefer-arrow-callback
UserSchema.pre("save", async function (next) {
  try {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    return next();
  } catch (error) {
    next(error);
  }
});

const User = model("User", UserSchema);

module.exports = User;
