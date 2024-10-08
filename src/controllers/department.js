"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { Department } = require('../models/department')

module.exports.department = {
    list: async (req, res) => {
        const data = await Department.find()

        res.status(200).send({
            error: false,
            data
        })
    },

    create: async (req, res) => {
        const data = await Department.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        const data = await Department.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        const data = await Department.updateOne({ _id:req.params.id}, req.body)

        res.status(202).send({
            error: false,
            new: await Department.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        const data = await Department.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
    // personnels: async (req, res) => {
    //     const Personnel = require("../models/personnel");
    
    //     const data = await res.getModelList(
    //       Personnel,
    //       { departmentId: req.params.id },
    //       "departmentId",
    //     );
    
    //     res.status(200).send({
    //       error: false,
    //       detail: await res.getModelListDetails(
    //         Personnel,
    //         { departmentId: req.params.id },
    //         "departmentId",
    //       ),
    //       data,
    //     });
    //   },
}