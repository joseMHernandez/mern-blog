const {Router} = require('express')

const {signup} = require('../controllers/authController')
const {signin} = require('../controllers/authController')
const authRoute = Router()


authRoute.post('/signup', signup)
authRoute.post('/signin', signin)


module.exports = authRoute