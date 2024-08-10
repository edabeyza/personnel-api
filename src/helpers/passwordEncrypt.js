"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const crypto = require('node:crypto'),
        keyCode = process.env.SECRET_KEY,
        loopCount = 10000,
        charCount = 32,
        encType = 'sha512';
    
const passwordEncrypt = function(password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

/* --------------------------------- exports -------------------------------- */
module.exports = passwordEncrypt
