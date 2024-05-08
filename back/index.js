const express = require('express')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/authRoute.js')
const connectDB = require('./db/connect')
require('dotenv').config('')
const cors = require('cors')


const app = express()

//get data from backend
app.use(express.json())

//midleware

app.use(cors('*'))


app.use('/api/user', userRoutes)

app.use('/api/auth', authRoutes)


const start = async () =>{

try {
    await connectDB(process.env.mongoURL)
    app.listen(3000, ()=>{
        console.log(`server is listening on port 3000..`)
    })
    
} catch (error) {
    console.log(error)
}

}

start()
