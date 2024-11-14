const express = require('express');
const jobRouter = require('./routes/jobRoutes');
const app = express();
 
app.use('/', jobRouter);

module.exports = app;
