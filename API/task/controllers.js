let tasks = require("../../tasks");

exports.fetchTasks = (req, res) => {
  res.json(tasks);
};
