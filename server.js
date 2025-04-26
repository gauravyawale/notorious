// import express from "express";
import { connectDB } from "./src/config/database.config.js";
import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process with failure
  });
