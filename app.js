const express = require('express');
const utils = require('./utils')
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoute = require('./router/user');
const createError = require('http-errors');
const path = require('path');
const morgan = require('morgan');
const router = require('./router/index');

// const corsOptions = {
//   origin: "http://localhost:8081"
// };
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}));



//load router on app
app.use('/users',userRoute);
app.use('/api', router)

//catch 404 error
app.use((req,res,next)=>{
  next(createError())
})

//listen to port 3000
app.listen(3000, ()=>{
    console.log('server is starting')
})
