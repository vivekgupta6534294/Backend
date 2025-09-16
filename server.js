// Create a folder -> npm init -y
// npm i express 
// Create Server.js

// Server Instantiate 
const express =require('express');
const app =express();

// activate the server on 3000 port
app.listen(3000,()=>{
    console.log("Server Started at port no 3000"); 
});

const bodyParser=require('body-parser');
// used to parse req.body in express -> PUT and POST

// Specifically parse JSON data and add it to the request . Body Object
app.use(bodyParser.json());


// Routes
app.get('/',(request,response)=>{
    response.send("Hello");
})

app.post('/api/cars',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
    


})