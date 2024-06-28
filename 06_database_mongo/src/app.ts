import mongoose from "mongoose";
import User from "./models/User";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/devitworld_database");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error", err);
    process.exit(1);
  }
};

const createUser = async () => {
  const newUser = new User({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  });

  try {
    const user = await newUser.save();
    console.log("User created:", user);
    return user._id;
  } catch (err) {
    console.error("Creation error", err);
    return null;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    console.log("Users:", users);
  } catch (err) {
    console.error("Read error", err);
  }
};

const updateUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { age: 31 },
      { new: true }
    );
    console.log("User updated:", user);
  } catch (err) {
    console.error("Update error", err);
  }
};

const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    console.log("User deleted:", user);
  } catch (err) {
    console.error("Delete error", err);
  }
};

// 기존 코드에 추가
connectDB().then(async () => {
  const userId = await createUser();

  console.log("userId:", userId, typeof userId);

  if (userId) {
    // CRUD 작업 호출
    await getUsers();
    await updateUser(userId.toString());
    await deleteUser(userId.toString());
  }
});
