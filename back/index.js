const express = require('express')
const userRoutes = require('./routes/user')
const connectDB = require('./db/connect')
require('dotenv').config('')
const cors = require('cors')


const app = express()

//midleware

app.use(cors('*'))


app.use('/api/user', userRoutes)




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
