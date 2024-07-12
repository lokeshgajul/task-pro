import express from "express";
import { createTask } from "../controllers/taskController.js";
const Router = express.Router();

Router.post("/tasks", createTask);

export default Router;
