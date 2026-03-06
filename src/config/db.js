import mongoose from "mongoose";

export const connectDB = async () => {
  const primary = process.env.MONGO_URI;
  const fallback = "mongodb://127.0.0.1:27017/taskmanager_test";

  // Try primary (if provided); if it fails, attempt fallback.
  if (primary) {
    try {
      await mongoose.connect(primary);
      console.log("MongoDB connected (primary)");
      return;
    } catch (err) {
      console.error("Primary MongoDB connection failed:", err.message);
    }
  }

  try {
    await mongoose.connect(fallback);
    console.log("MongoDB connected (fallback)");
  } catch (err) {
    console.error("Fallback MongoDB connection failed:", err.message);
  }
};

export default connectDB;