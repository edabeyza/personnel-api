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

        res.status(204).send({
            error: false
        })
    },

    login: async (req, res) =>{
        const { username, password } = req.body

        if(username && password){
            const user = await Personnel.findOne({ username, password })
            
            if(user)
                console.log(user)

        }else {
            throw new Error('Please entry email and password')
        }
    },

    logout: async (req, res) => {
        
    }
}