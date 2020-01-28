const User = require('../models/user')
const { ErrorHandler } = require('../helpers/errorHandler')

exports.index = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json({
            users: users
        })
    } catch (error) {
        next(error)
    }
}

exports.view = async (req, res, next) => {
    try {
        // console.log(req.auth);
        const id = req.params.id
        const user = await User.findById(id)
        // const user = await User.findOne({ _id: id })
        
        res.status(200).json({
            user: user
        })
    } catch (error) {
        next(error)
    }
}

exports.create = async (req, res, next) => {
    try {
        const payload = req.body
        const checkUser = await User.findOne({username: payload.username})
        if (checkUser) {
            throw new ErrorHandler(400, 'Username has already been taken.');
        }
        const user = new User(payload)
        await user.save()
        res.status(201).json({
            product: user,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id

        const newData = { $set: data }
        newData.$set.updated_at = new Date()
        
        const user = await User.findByIdAndUpdate(id, newData, {new : true} )
        // {new : true} => return new Document

        res.status(200).json({
            user: user,
            success: true
        })
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        
        res.status(200).json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}





// module.exports = {
//     index: async () => {

//     },
//     create: async () => {

//     }
// }