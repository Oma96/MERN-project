const mongoose = require("mongoose");
const Product = require("./Product");
const schema = mongoose.Schema;

const userSchema = schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password:String,
  dateCreation:{
      type:Date,
      default:Date.now()
  }
});

module.exports=User=mongoose.model('user',userSchema)