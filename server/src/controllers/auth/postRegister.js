import User from "../../models/User.js";
import Channel from "../../models/Channel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.exists({ email });

    if (userExists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newChannel = await Channel.create({});

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      channel: newChannel._id,
    });

    // create jwt token
    const token = jwt.sign(
      // user details to be encrypted in jwt
      {
        userId: user._id,
        email: user.email,
      },
      //  secret
      process.env.TOKEN_KEY,
      // additional config
      {
        expiresIn: "8h",
      }
    );
    return res.status(200).json({
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error occured, please try again");
  }
};
