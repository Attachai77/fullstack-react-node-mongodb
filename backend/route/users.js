const express = require('express')
const router = express.Router();
const userController = require('../controller/users.controller')
const { verifyToken: requireAuth } = require('../middleware/token')
const validator = require('../middleware/validator/users.validator')

router.get('/', userController.index )

router.get('/:id', requireAuth, userController.view )

router.post('/', validator.create, userController.create )

router.patch('/:id',validator.update, requireAuth, userController.update )

router.delete('/:id', requireAuth, userController.delete)

module.exports = router