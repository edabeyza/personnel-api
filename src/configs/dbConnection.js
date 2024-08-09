"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const mongoose = require('mongoose')

const dbConnection = function() {
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log('** DB Connected **'))
        .catch((err) => console.log('-- DB Not Connected --', err))
}

/* --------------------------------- exports -------------------------------- */
module.exports = {
    mongoose,
    dbConnection
}