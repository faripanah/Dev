const express = require("express");
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');

// Middleware to parse JSON
app.use(express.json());
// Morgan MiddleWare
app.use(morgan('tiny'));

// ROUTES
app.use('/api/tours/v1', tourRouter);
app.use('/api/users/v1', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});