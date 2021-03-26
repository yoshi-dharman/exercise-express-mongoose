const express = require('express');
const app = express();
const router = express.Router();

const userRouter = require("./user.controller");
const todoRouter = require("./todo.controller");

router.use("/user", userRouter);
router.use("/todo", todoRouter);



module.exports = router;