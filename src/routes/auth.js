"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const router = require('express').Router()

const auth = require('../controllers/auth')


router.post('/login', auth.login)
router.all('/logout', auth.logout)

/* --------------------------------- exports -------------------------------- */
module.exports = router