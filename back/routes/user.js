const { Router } = require('express')


const userRoutes = Router()


const {
getUser
} = require('../controllers/userController')


userRoutes.get('/', getUser )



module.exports = userRoutes