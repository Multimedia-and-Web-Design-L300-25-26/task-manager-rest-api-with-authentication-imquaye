import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
import mongoose from "mongoose";

// Load environment variables from workspace .env (one level up)
dotenv.config({ path: "../.env" });

// Connect to DB before tests
beforeAll(async () => {
	await connectDB();
});

// Close DB connection after tests to avoid open handles
afterAll(async () => {
	await mongoose.disconnect();
});