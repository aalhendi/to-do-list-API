const express = require("express");
const { fetchTasks } = require("./controllers");

const router = express.Router();

//Fetch Tasks List
router.get("/", fetchTasks);

module.exports = router;
