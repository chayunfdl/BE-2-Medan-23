const express = require('express')
const router = express.Router()

// Hello world
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
})

router.get('/', (req, res, next) => {
  res.send("Hello World")
})

module.exports = router;