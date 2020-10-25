/**
 * Project: Origa.ai Backend
 * Description: Backend Assignment for Origa.ai
 * Author: AK Hanish <akhanish7@gmail.com>
 */

const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

//POST for updating the user Collection with new feild
router.post('/', userController.updateUser);

module.exports = router;
