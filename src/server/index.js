import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
