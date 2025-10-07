// import the model
const Todo = require("../models/Todo");

exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const{title,description}=req.body;
        const todo =await Todo.findByIdAndUpdate(
            {
                _id:id
            },
            {
                title,description,updatedAt:Date.now()
            },
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:`Updated Successfully`
        })
        

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
