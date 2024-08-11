"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { Personnel } = require('../models/personnel')

module.exports.personnel = {
    list: async (req, res) => {
        const data = await Personnel.find()

        res.status(200).send({
            error: false,
            data
        })
    },

    create: async (req, res) => {
        const data = await Personnel.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        const data = await Personnel.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        const data = await Personnel.updateOne({ _id:req.params.id}, req.body)

        res.status(202).send({
            error: false,
            new: await Personnel.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        const data = await Personnel.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },

    login: async (req, res) =>{
        const { username, password } = req.body

        if(username && password){
            const user = await Personnel.findOne({ username, password })
            
            if(user){
                req.session = {
                    id: user._id, // hocaya sor
                    password: user.password
                }

                if(req.body?.rememberMe){
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 2
                }

                res.status(200).send({
                    error: false,
                    user
                })
            } else {
                res.errorStatusCode = 401
                throw new Error('Wrong username or password.')
            }
        }else {
            res.errorStatusCode = 401
            throw new Error('Please entry email and password')
        }
    },

    logout: async (req, res) => {
        req.session = null

        res.send({
            error: false,
            message: 'logout succesfully'
        })
        
    }
}