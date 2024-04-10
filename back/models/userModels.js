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

module.exports = mongoose.model('User', UserSchema)
