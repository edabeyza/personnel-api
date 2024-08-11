"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

module.exports = {

    isLogin: (req, res, next) => {

        if (req.user && req.user.isActive) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login!')
        }
    },

    isAdmin: (req, res, next) => {
        
        if(req.user && req.user.isActive && req.user.isAdmin) {
            next()
        } else {
            throw new Error('NoPermission: You must login and to be Admin')
        }
    },

    isAdminOrLead: (req, res, next) => {

        const departmentId = req.params?.id // hocaya sor

        if(req.user && req.user.Active && (req.user.isAdmin || (req.user.isLogin && req.user.departmentId == departmentId))) {
            next()
        } else {
            throw new Error('NoPermission: You must login and to be Admin or Lead')
        }

    }
}