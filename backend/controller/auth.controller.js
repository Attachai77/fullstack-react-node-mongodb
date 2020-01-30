const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const { ErrorHandler } = require('../helpers/errorHandler')
const { secretTokenKey } = require('../config/env')
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
                { userId: user._id },  secretTokenKey,  {    expiresIn:'1d'  }
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
        try {
            const { username, password } = req.body
            const user = await User.findOne({username})
            if (!user) {
                res.status(200).json({
                    success: false,
                    message: "Username or password is not correct."
                })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                res.status(200).json({
                    success: false,
                    message: "Username or password is not correct."
                })
            }

            const token = jwt.sign( 
                { userId: user._id },  secretTokenKey,  {    
                    // expiresIn: 30 //seconds  
                    expiresIn: '1d' //a day  
                }
            )
            res.status(200).json({
                success: true,
                token,
                user
            })
        } catch (error) {
            next(error)
        }
    },
    resetPassword: async (req, res, next) => {

    }
}