"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')

const PersonnelSchema = new mongoose.Schema({
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: function() { return 'sifre sifrelendi'}
    },

    firstName: String,

    lastName: String,

    phone: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    salary: {
        type: Number,
        default: 0 
    },

    description: String,

    isActive: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    isLead: {
        type: Boolean,
        default: false
    },

    startedAt: Date
}, {
    collection: 'personnels',
    timestamps: true
})

/* --------------------------------- exports -------------------------------- */
module.exports.Personnel = mongoose.model('Personnel', PersonnelSchema)