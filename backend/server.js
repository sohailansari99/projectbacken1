require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB()

app.listen(3600, () => {
    console.log("Server is running on 3600 port Number ")
})