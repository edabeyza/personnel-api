"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { Token } = require('../models/token')

module.exports = async (req, res, next) => {
    
    req.user = null;

    const auth = req.headers?.authorization || null
    const tokenKey = auth ? auth.split(' ') : null

    if(tokenKey && tokenKey[0] == 'Token'){

        const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId')

        if(tokenData){
            req.user = tokenData.userId
        }
    }
    console.log(req.user)
    
    next()
}