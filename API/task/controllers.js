let tasks = require("../../tasks");

exports.fetchTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
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

exports.updateTask = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);

  if (foundTask) {
    for (const key in req.body) {
      foundTask[key] = req.body[key];
    }
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found." });
  }
};

exports.deleteTask = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found." });
  }
};
