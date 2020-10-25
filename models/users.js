/**
 * Project: Origa.ai Backend
 * Description: Backend Assignment for Origa.ai
 * Author: AK Hanish <akhanish7@gmail.com>
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'User name is REQUIRED'],
  },
  noOfOrders: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('UserSchema', userSchema);
