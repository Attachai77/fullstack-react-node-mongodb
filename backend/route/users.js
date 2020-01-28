const express = require('express')
const router = express.Router();
const userController = require('../controller/users.controller')
const { verifyToken: requireAuth } = require('../middleware/token')

router.get('/', userController.index )

router.get('/:id', requireAuth, userController.view )

router.post('/', userController.create )

router.patch('/:id', requireAuth, userController.update )

router.delete('/:id', requireAuth, userController.delete)

module.exports = router