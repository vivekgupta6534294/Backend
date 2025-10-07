// import the model
const Todo = require("../models/Todo");

exports.getTodo=async(req,res)=>{
    try{
        // fetch all todo items from db 
        const todos=await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched"
        })


    }
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            error:err.message,


        })
        

    }
}
