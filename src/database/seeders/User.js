'use strict'

/**@type {import('sequelize-cli').Migration}*/
import bcryptUtils from "../../utils/bcryptUtil"

module.exports = {
    up:(queryInterface,Sequelize)=>queryInterface.bulkInsert(
        'Users',
        [{
            id : 1,
            email: "username@lambdaa.org",
            password:  bcryptUtils.hash('internship'),
            createdAt: new Date(),
            updatedAt: new Date(), 
        }],
        {}
    ),
    down:(queryInterface, Sequelize) =>queryInterface.bulkDelete("Book",null, {})
}




