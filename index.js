const express = require("express")
//set up express app 

const app = express();

//listen for request 

app.listen(process.env.PORT , process.env.IP, function(){
    console.log('now listening for stocks') 

});