const { Router } = require('express')
const router = new Router()

const AuthController = require('../controller/auth.controller')
const usersRoute = require('./users') 

//Authenticate
router.post('/register', AuthController.register )
router.post('/login', AuthController.login )

router.use('/users', usersRoute)

module.exports = router
