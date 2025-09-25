const mongoose=require("mongoose");
// npm i mongoose

require("dotenv").config;
// jo bhi environment mai define hai vo process object mai load ho jayega 

const dbConnect = () => {
    // connection between node app and db  and wrapped in function , export
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("DB Connection is Successfull"))
    .catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.message);

        process.exit(1);
    });
    // npm i dotenv
}
module.exports=dbConnect;

// module.export se backend mai export krte hai 