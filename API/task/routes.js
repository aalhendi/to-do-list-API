const express = require("express");
const {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("./controllers");

const router = express.Router();

//Fetch Tasks List
router.get("/", fetchTasks);

//Add Task
router.post("/", addTask);

//Update Task
router.put("/:taskId", updateTask);

//Delete Task
router.delete("/:taskId", deleteTask);

module.exports = router;
