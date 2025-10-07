const express =require("express");

const router=express.Router();

// import the controller 

const {createTodo}= require("../controllers/createTodo");
const {getTodo,getTodoById}= require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");

// define API routes
router.post("/createTodo",createTodo);// is path ko controller se map krwa dia
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);

module.exports=router;