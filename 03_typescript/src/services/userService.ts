import User from "../models/userModel";

export const findAllUsers = async () => {
  return await User.find();
};

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  const newUser = new User({ username, email, password });
  return await newUser.save();
};
