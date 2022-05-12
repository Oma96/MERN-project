const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = schema({


    name: String,
    desc: String,
    price: String,
    adress: String,
    date: String,
    phone: Number,
    dateCreation:{
        type:Date,
        default:Date.now()
    }



})

module.exports=Product=mongoose.model('product',productSchema)