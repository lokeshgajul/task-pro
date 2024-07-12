import Task from "../schema/index.js";

export const createTask = async (req, res) => {
  const { title, date, startingTime, description, category } = req.body;

  try {
    const newTask = new Task({
      title,
      date,
      startingTime,
      description,
      category,
    });
    await newTask.save();
    res.status(201).json(newTask);
    console.log("response ", res.json());
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("backend 1");
  }
};
