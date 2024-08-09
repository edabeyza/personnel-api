"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { personnel } = require('../controllers/personnel')

const router = require('express').Router()

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