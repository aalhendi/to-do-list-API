// Imports
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./API/task/routes");

const app = express();

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listen @ port 8000
app.use("/tasks", taskRoutes);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
