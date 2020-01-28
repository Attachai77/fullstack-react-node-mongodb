const Joi = require('@hapi/joi');
const { ErrorHandler } = require('../../helpers/errorHandler')

module.exports = {
    create:  (req, res, next) => {
        try {
            const schema = Joi.object({
                username: Joi.string().alphanum().min(4).max(30).required(),
                password: Joi.string().required().min(8).max(16).pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')),
                first_name: Joi.string().allow("").min(4).max(30),
                last_name: Joi.string().allow("").min(4).max(30),
                email: Joi.string().allow("")
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
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
    },
    update:  (req, res, next) => {
        try {
            const schema = Joi.object({
                password: Joi.string().allow("").min(8).max(16).pattern(new RegExp('^[a-zA-Z0-9]{8,16}$')),
                first_name: Joi.string().allow("").min(4).max(30),
                last_name: Joi.string().allow("").min(4).max(30),
                email: Joi.string().allow("")
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
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