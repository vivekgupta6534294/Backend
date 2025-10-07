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

exports.getTodoById=async(req,res)=>{
    try{
        // extract to do item basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data found with given id",
            })
        }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully feteched`
            }
        )
       

    }
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            error:err.message,


        });
       
    }
}
