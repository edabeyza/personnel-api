"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

module.exports = async function() {

    // return null

    // REMOVE DATABASE
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('Database and all data deleted!')

    // CREATE DATABASE
    const { Department } = require('../models/department')
    const { Personnel } = require('../models/personnel')

    const departments = [
        "FullStack Department",
        "DevOps Department",
        "CyberSec Department",
    ]

    departments.forEach(value => {
        // Department Create
        Department.create({ name: value})
            .then((department) => {console.log('Department added.')

            for(let i in [...Array(10)]){
                // Personnel Create
                Personnel.create({
                    departmentId: department._id,
                    username: "test" + (value[0] + i),
                    password: '1234',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    phone: '123456789',
                    email: 'test' + (value[0] + i) + '@site.com',
                    title: 'title',
                    salary: 2500,
                    description: 'description',
                    isActive: true,
                    isAdmin: false,
                    isLead: false,
                    startedAt: '2023-10-15 13:14:15'
                })
            } })
            console.log('Personnel added.')
    })
}