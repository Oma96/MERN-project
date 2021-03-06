//create the server
//connect the db 
//create the model 
//create the route 
const cors= require("cors")
const express=require('express')


const connectDB = require('./config/connectDB')
const app=express()
 require('dotenv').config()
port=5000
connectDB()
//middleware
 app.use(express.json())
 app.use(cors())
//routes
app.use('/api/user', require('./routes/user') )
app.use('/api/product', require('./routes/product'))
app.get("/", (req,res)=>{
    res.send("upload file")
})

app.listen(port,(err)=>{
    err? console.log(err):console.log('the server is up and running ....');
})