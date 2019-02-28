const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

//set up express app 
const app = express();

//connect to mongodb 

mongoose.connect('mongodb://localhost/stocksave',  { useNewUrlParser: true } );
mongoose.Promise = global.Promise

app.use(bodyParser.json())


//initialize routes 
app.use("/api", require("./routes/api"));


// error handling middleware 

app.use(function(error,req,res,next){
    console.log(error)
    res.send({error:error.message})
    
})
//listen for request 

app.listen(process.env.PORT , process.env.IP, function(){
    console.log('now listening for stocks') 

});