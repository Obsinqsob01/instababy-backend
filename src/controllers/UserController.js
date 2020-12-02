const { UserService } = require("../services");
const auth = require("../utils/auth");
const UserValidator = require("../validators/UserValidator");

module.exports = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const exists = await UserService.emailExists(body.email);
      if (exists) {
        throw new Error("This email has been already taken");
      }

      const newUser = await UserService.create(body);

      res.status(201).json({
        payload: newUser,
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.findOneByEmail(email);
      if (!user) throw new Error("User has not been found");

      const match = auth.comparePasswords(password, user.password);
      if (!match) throw new Error("Password is not valid");

      const token = auth.createToken(user);

      res.status(200).send({ payload: token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { decoded, body } = req;

      const user = await UserService.findOneById(decoded.id);
      if (!user) throw new Error("User not found");

      const modifiedUser = await UserService.update(user, body);

      modifiedUser.password = undefined;

      res.status(200).send({ payload: modifiedUser });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  follow: async (req, res) => {
    try {
      const { decoded, params } = req;

      const followID = decoded.id;
      const followingID = params.id;

      const follower = await UserService.follow(
        followID,
        followingID,
        "following"
      );

      const following = await UserService.follow(
        followingID,
        followID,
        "followers"
      );

      following.password = undefined;
      follower.password = undefined;

      res.status(200).send({ payload: { following, follower } });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  unfollow: async (req, res) => {
    try {
      const { decoded, params } = req;

      const followID = decoded.id;
      const followingID = params.id;

      const follower = await UserService.unfollow(
        followID,
        followingID,
        "following"
      );

      const following = await UserService.unfollow(
        followingID,
        followID,
        "followers"
      );

      following.password = undefined;
      follower.password = undefined;

      res.status(200).send({ payload: { following, follower } });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
