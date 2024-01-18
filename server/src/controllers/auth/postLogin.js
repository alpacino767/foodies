import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("condtion");
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
          expiresIn: "24h",
        }
      );
      console.log('token', token);
      return res.status(200).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token,
        },
      });

      // send back response to user
    }
    //   return res.status(400).json({
    //   userDetails: {
    //     // email: user.email,
    //     // username: user.username,
    //     // token,
    //     error: "Invalid credentials"
    //   },
    // });
    return res
      .status(400)
      .json({ error: "Invalid Credentials. Please try again" });
  } catch (error) {
    return res.status(500).send("Something went wrong please try again later");
  }
};
