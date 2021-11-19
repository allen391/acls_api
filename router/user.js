const express = require('express');
const mysql = require("mysql");
const router = express.Router();

//login
router.post('/users/login', async (req,res,next) => {
  try{
    res.send('post /users/login')
  }catch (err){
    console.log(err)
    next()
  }
})

//register
router.post('/users', async (req,res,next) => {
  try{
    res.send('post /users')
  }catch (err){
    next(err)
    console.log(err)
  }
})

//get user info
router.get('/users', async (req,res,next) => {
  try{
    res.send('post /user')
  }catch (err){
    next(err)
    console.log(err)
  }
})

//update user info
router.put('/users', async (req,res,next) => {
  try{
    res.send('post /user')
  }catch (err){
    next(err)
    console.log(err)
  }
})


module.exports = router;
