require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
