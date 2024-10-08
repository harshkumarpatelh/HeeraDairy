'use strict';


const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp:{
    type:DataTypes.STRING,
    allowNull:true,
    set(value){
      if(value){
        this.setDataValue('otpSentOn',new Date());
        this.setDataValue('otp',value);
      }
    }
  },
  otpSentOn:{
    type:DataTypes.DATE,
    allowNull:true
  },
  userType: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ['0', '1', '2'] // 0-> Admin, 1-> Manager, 2-> user
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
  }
},
  {
    freezeTableName: true,
    paranoid: true,
    modelName: 'users'
  }
);


module.exports = users;