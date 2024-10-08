'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      token: {
        type: Sequelize.STRING,
        allowNull:true
      },
      otp:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      otpSentOn:{
        type:Sequelize.DATE,
        allowNull:true,
      },
      userType: {
        type: Sequelize.ENUM,
        values:['0','1','2'], // 0-> admin , 1-> manager, 2-> user
        allowNull:false
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};