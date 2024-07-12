import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";
import { config } from "dotenv";
import { Connection } from "./DB/DB.js";
const app = express();
const port = process.env.PORT || 3020;

config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://10.0.2.2:3020",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

Connection();

app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.use("/api", taskRoutes); // Use the routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
