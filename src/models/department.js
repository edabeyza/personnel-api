"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: 'departments',
    timestamps: true
})

/* --------------------------------- exports -------------------------------- */
module.exports.Department = mongoose.model('Department', DepartmentSchema)