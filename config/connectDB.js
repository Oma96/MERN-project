const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://test:test@cluster0.jd6yg.mongodb.net/projet?retryWrites=true&w=majority",
    () => { try {
        console.log('the DB is connected..');
    } catch (error) {
        console.log(error);
    } }
  );
};
module.exports=connectDB