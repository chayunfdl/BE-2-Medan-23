const express = require('express')
const dotenv = require('dotenv')

// using .env
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

// Hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Listen to internet
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});