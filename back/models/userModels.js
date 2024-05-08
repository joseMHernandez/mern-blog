const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    username: {
        type: String, // only strings
        required: true, // you must fill the blank space
        unique: true, // the users going to be unique
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String, 
        required: true
    }
},

{timestamps: true}

)

const User =  mongoose.model('User', UserSchema)

module.exports = User
