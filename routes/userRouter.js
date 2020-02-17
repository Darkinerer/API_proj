const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
 
userRouter.use("/postuser", userController.postUser);
userRouter.use("/create", userController.addUser);
userRouter.use("/map", userController.getmap);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;