const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/orderRoutes')

// using .env
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

// Using route middleware from orderRoutes
app.use('/api', router);

// Listen to internet
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});