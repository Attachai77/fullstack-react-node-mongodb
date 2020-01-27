const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    email: String,
    birthdate: Date,
    gendar: String,
    tel: String,
    weight: Number,
    height: Number,
    deleted: Boolean
}, { timestamps: true, versionKey: false } )

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel