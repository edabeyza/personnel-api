"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel',
        required: true,
        index: true
    },

    token: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    }
}, {
    collection: 'tokens',
    timestamps: true
})

module.exports.Token = mongoose.model('Token', TokenSchema)