const jwt = require('jsonwebtoken')
const { secretTokenKey } = require('../config/env')

module.exports = {
    verifyToken: async (req, res, next) => {
        try {
            const { token } = req.headers;
            if (!token) {
                res.status(401).json({
                    message: "Token is invalid or expired."
                })
            }    

            jwt.verify(token, secretTokenKey, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        message: "Token is invalid or expired."
                    }) 
                }
                req.auth = { userId: decoded.userId  }
            });

            next();
        } catch (error) {
            next(error)
        }
    },
    refreshToken: async () => {

    }
}