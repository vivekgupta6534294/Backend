const express =require("express");
const app=express();

// ye server kisi port ke uper listen kre 
// load config env file

require("dotenv").config();
const PORT=process.env.PORT || 4000;
// ya to port waha se ayega warna 4000 use krlenge ager nhi aya 

// middleware ki need padhegi to parse json request body
app.use(express.json());

// route map krna hoga before live server
// import routes for todoAPI

const todoRoutes=require("./routes/todo");
app.use("/api/v1",todoRoutes);


// startserver
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})


//DB Connection Karte hai 
const dbConnect=require("./config/database");
dbConnect();




// default route bhi likhna hoga 

app.get("/",(req,res)=>{
    res.send(`<h1> This is HomePage </h1>`);

})











// const express=require("express"); // import
// const app=express(); // instance bana lia 

// app.listen(3000,()=>{
//     console.log("APP is running successfully");
// });


