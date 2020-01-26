const { Router } = require('express')
const router = new Router()

const usersRoute = require('./users')

router.use('/users', usersRoute)

module.exports = router
