const mongoose = require("mongoose");
const Product = require("./Product");
const schema = mongoose.Schema;

const userSchema = schema({
  _id: schema.Types.ObjectId,
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
const cartSchema = schema({
  Product: {type:schema.Types.ObjectId, ref: 'user', default:[]}
})

module.exports=User=mongoose.model('user',userSchema,'cart',cartSchema)
