/**
 * Project: Read Count System
 * Description: Read Count system for stories(Pratilipi Test Project)
 * Author: AK Hanish <akhanish7@gmail.com>
 */
const mongoose = require('mongoose');
const User = require('./users');

const orderSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: User,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Orders', orderSchema);
