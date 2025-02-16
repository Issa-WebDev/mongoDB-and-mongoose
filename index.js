import express from "express";
import { insertManyDoc } from "./models/movies.js";
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 1000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

insertManyDoc();

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
