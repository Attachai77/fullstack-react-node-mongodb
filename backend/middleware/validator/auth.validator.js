const Joi = require('@hapi/joi');
const { ErrorHandler } = require('../../helpers/errorHandler')

module.exports = {
    login:  (req, res, next) => {
        try {
            const schema = Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required(),
            })   

            const { error } = schema.validate(req.body);
            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }
            
            next()
        } catch (error) {
            next(error)
        }
    },
    register:  (req, res, next) => {
        try {
            const schema = Joi.object({
                username: Joi.string().alphanum().min(4).max(30).required(),
                password: Joi.string().allow("").min(8).max(16).pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')),
                first_name: Joi.string().allow("").min(4).max(30),
                last_name: Joi.string().allow("").min(4).max(30),
                email: Joi.string().allow("").email(),
                weight: Joi.number().min(1).max(500).allow(""),
                birth_date: Joi.date().max('now').allow("")
            })   

            const { error } = schema.validate(req.body);
            if (error) {
                throw new ErrorHandler(400, error.details[0].message);
            }
            
            next()
        } catch (error) {
            next(error)
        }
    }
}