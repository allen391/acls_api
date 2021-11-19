const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('hello')
})

router.post('/', (req,res) => {
  console.log(req.body)
})

router.use(require('./user'));

module.exports = router
