/**
 * Project: Origa.ai Backend
 * Description: Backend Assignment for Origa.ai
 * Author: AK Hanish <akhanish7@gmail.com>
 */
const mongoose = require('mongoose');
const User = require('./users.model');

const orderSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: User,
  },
  subTotal: {
    type: Number,
    required: [true, 'Sub Total Required'],
  },
  date: {
    type: Date,
    required: [true, 'Date required'],
  },
});

module.exports = mongoose.model('orders', orderSchema);
