let tasks = require("../../tasks");

exports.fetchTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  console.log(req.body);
  try {
    const id = tasks.length + 1;
    const newTask = {
      id,
      ...req.body,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
  }
};
