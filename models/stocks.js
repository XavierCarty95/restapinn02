const mongoose = require("mongoose")
const Schema = mongoose.Schema



// creat stock schema & models 

const StockSchema = new Schema({
    
    name: {
        type: String,
        required: [true, "Name field is required"]
    }, 
    
    price: { 
        type: String
        
    }, 
    
    availabile: {
        type : Boolean, 
        default: false
    }
})

const Stock = mongoose.model('stock', StockSchema);



module.exports = Stock