const express = require('express')
const router = express.Router()

const { orderData, addOrderData } = require('../controllers/orderController')

router.get('/', orderData)
router.post('/add', addOrderData)

module.exports = router;