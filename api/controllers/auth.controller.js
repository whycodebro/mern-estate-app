import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch {
    res.status(500).json(error.message);
  }
};

export default Signup;