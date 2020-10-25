/**
 * Project: Origa.ai Backend
 * Description: Backend Assignment for Origa.ai
 * Author: AK Hanish <akhanish7@gmail.com>
 */

const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

//GET all order Details
router.get('/', orderController.orderDetails);

module.exports = router;
