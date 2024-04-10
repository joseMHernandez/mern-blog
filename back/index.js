const express = require('express')

const connectDB = require('./db/connect')
require('dotenv').config('')


const app = express()



app.get('/',(req, res)=>{
res.send('hello')
})





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
