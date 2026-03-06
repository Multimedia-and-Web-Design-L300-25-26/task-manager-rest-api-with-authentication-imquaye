import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// Load environment variables from workspace .env (one level up)
dotenv.config({ path: "../.env" });

let mongoServer;

// Start in-memory MongoDB and connect
beforeAll(async () => {
	mongoServer = await MongoMemoryServer.create({ instance: { args: ["--quiet"] } });
	process.env.MONGO_URI = mongoServer.getUri();
	await connectDB();
});

// Close DB connection and stop in-memory server
afterAll(async () => {
	await mongoose.disconnect();
	if (mongoServer) await mongoServer.stop();
});