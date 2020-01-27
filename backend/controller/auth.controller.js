const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const { ErrorHandler } = require('../helpers/errorHandler')
const User = require('../models/user')

module.exports = {
    register: async (req, res, next) => {
        try {
            const { username, password, first_name, last_name, email } = req.body
            const checkUser = await User.findOne({username})
            if (checkUser) {
                throw new ErrorHandler(400, 'Username has already been taken.');
            }

            const user = new User({
                username, password, first_name, last_name
            })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save()

            const token = jwt.sign( 
                { userId: user._id },  'UvFZNbUaEMUjTAFPwGAsQ8zwR8M2LrNm',  {    expiresIn:'1d'  }
            )

            res.status(201).json({
                message: "Register successfully",
                token, user
            })
        } catch (error) {
            // console.log(error);
            next(error)
        }
    },
    login: async (req, res, next) => {

    },
    verifyToken: async (req, res, next) => {

    },
    refreshToken: async (req, res, next) => {

    },
    resetPassword: async (req, res, next) => {

    }
}