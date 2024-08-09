"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

module.exports = (err, req, res, next) => {

    const errorStatus = res.errorStatusCode || 500

    return res.status(errorStatus).send({
        error: true,
        message: err.message,
        cause: err.cause,
        stack: err.stack
    })
}