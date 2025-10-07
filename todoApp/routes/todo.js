const express =require("express");

const router=express.Router();

// import the controller 

const {createTodo}= require("../controllers/createTodo");
const {getTodo}= require("../controllers/getTodo");

// define API routes
router.post("/createTodo",createTodo);// is path ko controller se map krwa dia
router.get("/getTodos",getTodo);
module.exports=router;