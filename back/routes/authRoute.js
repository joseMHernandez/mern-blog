const {Router} = require('express')

const signup = require('../controllers/authController')
const authRoute = Router()


authRoute.post('/signup', signup)



module.exports = authRoute