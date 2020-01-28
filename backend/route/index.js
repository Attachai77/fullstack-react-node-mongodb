const { Router } = require('express')
const router = new Router()

const AuthController = require('../controller/auth.controller')
const usersRoute = require('./users') 
const validator = require('../middleware/validator/auth.validator')

//Authenticate
router.post('/register',validator.register, AuthController.register )
router.post('/login',validator.login, AuthController.login )

router.use('/users', usersRoute)

module.exports = router
