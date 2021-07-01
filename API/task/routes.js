const express = require("express");
const { fetchTasks, addTask } = require("./controllers");

const router = express.Router();

//Fetch Tasks List
router.get("/", fetchTasks);

//Add Task
router.post("/", addTask);

module.exports = router;
