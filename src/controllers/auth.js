"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { Personnel } = require('../models/personnel')

const { Token } = require('../models/token')

const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    login: async(req, res) => {
        const { username, password } = req.body

        if(username && password) {
            const user = await Personnel.findOne({ username })

            if(user && user.password == passwordEncrypt(password)) {

                if(user.isActive){

                    // TOKEN
                    let tokenData = await Token.findOne({ userId: user._id})

                    if(!tokenData) {
                        tokenData = await Token.create({
                            userId: user._id,
                            token: passwordEncrypt(user._id + Date.now())
                        })
                    }
                    // TOKEN

                    res.send({
                        error: false,
                        token: tokenData.token,
                        user
                    })

                } else {
                    res.errorStatusCode = 401
                    throw new Error('User is not Active!')
                }
            } else {
                res.errorStatusCode = 401
                throw new Error('Username and password are wrong!')
            }
        } else {
            res.errorStatusCode = 401
            throw new Error('Please enter username and password.')
        }
    },

    logout: async(req, res) => {
        const data = req.user ? await Token.deleteOne({ userId: req.user._id}) : null

        res.status(200).send({
            error: false,
            message: 'Logout successfully',
            data
        })
    }
}