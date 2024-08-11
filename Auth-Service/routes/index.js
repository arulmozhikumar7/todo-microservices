const router = require('express').Router();
const userController = require('../controller/userController')


router.post('/signup', userController.createUser)
router.post('/signin', userController.loginUser)

module.exports = router