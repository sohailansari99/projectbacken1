const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect(process.env.MONGO_URI)

    console.log("Connect To DataBase")
    
}

module.exports = connectDB