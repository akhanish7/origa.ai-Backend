/**
 * Project: Origa.ai Backend
 * Description: Backend Assignment for Origa.ai
 * Author: AK Hanish <akhanish7@gmail.com>
 */

const Order = require('../models/orders.model');
const User = require('../models/users.model');

exports.orderDetails = async (req, res) => {
  try {
    const users = await User.find();
    const orders = await Order.find();
    var resultArr = [];
    users.forEach((user) => {
      var averageBillValue = 0;
      const orderArr = orders.filter((order) => {
        return order.userId == user.userId;
      });

      orderArr.forEach((newOrder) => {
        averageBillValue = averageBillValue + newOrder.subTotal;
      });
      averageBillValue = Math.floor(averageBillValue / orderArr.length);
      resultArr.push({
        userId: user.userId,
        name: user.name,
        averageBillValue,
        noOfOrders: orderArr.length,
      });
    });

    res.json(resultArr);
  } catch (error) {
    console.log('error', error);
    res.json({ message: error });
  }
};
