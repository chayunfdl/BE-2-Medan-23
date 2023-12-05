const Order = require('../models/order')

const orderData = async (req, res, next) => {
  try {
    // Find all users
    const orders = await Order.findAll();
    console.log("All orders:", JSON.stringify(orders, null, 2));
    res.status(201).json({ data: orders })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const addOrderData = async (req, res, next) => {
  try {
    const { name, email, order } = req.body;

    if (!name || !email || !order) {
      return res.status(400).json({ error: 'Name, email, and order details are required.' });
    }

    const createdOrder = await Order.create({
      name,
      email,
      order,
    });

    res.status(201).json({ msg: 'Coffee order placed successfully', createdOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { orderData, addOrderData };
