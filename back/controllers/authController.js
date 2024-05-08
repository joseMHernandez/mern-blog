const User = require('../models/userModels')
const bcrypts = require('bcryptjs')


const signup = async (req, res) =>{ 
    
try {
    if(
        !req.body.username ||
        !req.body.email ||
        !req.body.password ||
        req.body.username === '' || req.body.email === '' || req.body.password === ''
    ){
        return res.status(400).json('all fields required')
    }

    //to hash password = npm install bcryptjs imported and then this code down below
    const hashedPassword = bcrypts.hashSync(req.body.password, 10)
    
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    }
    const data = await User.create(newUser)
    
    return res.send('signup is successful').status(201).json(data)
} catch (error) {
    return res.status(500).json('the username or email is already in used')
}



    
}

module.exports = signup