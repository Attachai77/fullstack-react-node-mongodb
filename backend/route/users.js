const express = require('express')
const router = express.Router();
const userController = require('../controller/users.controller')

router.get('/', userController.index )

router.get('/:id', userController.view )

router.post('/', userController.create )

router.patch('/:id', userController.update )

router.delete('/:id', userController.delete)

module.exports = router