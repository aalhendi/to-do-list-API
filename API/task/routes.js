const express = require("express");
const { fetchTasks, addTask, updateTask } = require("./controllers");

const router = express.Router();

//Fetch Tasks List
router.get("/", fetchTasks);

//Add Task
router.post("/", addTask);

//Update Task
router.put("/:taskId", updateTask);

module.exports = router;
