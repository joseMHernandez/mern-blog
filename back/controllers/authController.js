const User = require('../models/userModels')
const bcrypts = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res) =>{ 
    
try {
    if(
        !req.body.username ||
        !req.body.email ||
        !req.body.password ||
        req.body.username === '' || req.body.email === '' || req.body.password === ''
    ){
   return  res.status(400).json({message:'all fields are required' })
    
    }

    //to hash password = npm install bcryptjs imported and then this code down below
    const hashedPassword = bcrypts.hashSync(req.body.password, 10)
    
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    }
    const data = await User.create(newUser)
    
    return res.status(201).json({message:'signup is successful', data})
} catch (error) {
    return res.status(500).json('the username or email is already in used')
    
}
   
}



const signin = async  (req, res) =>{
const {email, password} = req.body

if(!email || !password || email === '' || password === ''){
    return res.status(400).json({message:'all fields are required' })
}
try {
    //findone to verify email
const validUser = await User.findOne({email})
if(!validUser){
    return res.status(404).json({message: 'User not found'})
}

//comparing if password exists with 'compareSync' method
// compare current password with  email
const validPassword = bcrypts.compareSync(password, validUser.password)
if(!validPassword) return res.status(400).json({message: 'Invalid password'})


//if everything is correct we need to authenticate the user with token
// - intsall npm 'jsonwebtoken'

const token = jwt.sign(
    { userId: validUser._id},
    //secret token from .env
    process.env.JWT_SECRET
)

//delete password from json
const {password: pass, ...rest} = validUser._doc

return res.status(200).cookie('access_token', token, {
// to make http secure
    httpOnly: true
}).json({message: 'sign in successful', rest})


} catch (error) {
    return res.status(500).json({message:'something wrong is happening, try one more time :)'})
}






}

module.exports ={
    signup,
    signin
}