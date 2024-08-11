"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { personnel } = require('../controllers/personnel')
const permissions = require('../middlewares/permissions')

const router = require('express').Router()

/* ----------------------------- login & logout ----------------------------- */

router.post('/login', personnel.login)
router.all('/logout', personnel.logout)

router.use(permissions.isAdmin)

router.route('/')
    .get(personnel.list)
    .post(personnel.create)

router.route('/:id')
    .get(personnel.read)
    .put(personnel.update)
    .patch(personnel.update)
    .delete(personnel.delete)

/* --------------------------------- exports -------------------------------- */
module.exports = router