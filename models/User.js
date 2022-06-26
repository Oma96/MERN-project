const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
  
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password:String,
  
  role: String,
  favorite:Array,

  dateCreation:{
      type:Date,
      default:Date.now()
  }

});
// const cartSchema = schema({
//   Product: {type:schema.Types.ObjectId, ref: 'user', default:[]}
// })


module.exports=User=mongoose.model('user',userSchema)
