"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

const { department } = require('../controllers/department')

const permissions = require('../middlewares/permissions')

const router = require('express').Router()

router.route('/')
    .get(permissions.isLogin, department.list)
    .post(permissions.isAdmin, department.create)

router.route('/:id')
    .get(permissions.isLogin, department.read)
    .put(permissions.isAdmin, department.update)
    .patch(permissions.isAdmin, department.update)
    .delete(permissions.isAdmin, department.delete)

// router.get("/:id/personnels", permissions.isAdminOrLead, department.personnels);

/* --------------------------------- exports -------------------------------- */
module.exports = router