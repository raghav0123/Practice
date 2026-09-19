const express = require('express');
const Router = express.Router();
const {getAllUsers,} = require('../controllers/userController/getAllUsers')
const {createUsers} = require('../controllers/userController/createUser')
module.exports = Router

Router.get('/', getAllUsers);

Router.post('/', createUsers);
