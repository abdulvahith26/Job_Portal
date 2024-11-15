const express = require('express');
const jobsRouter = require('./routes/jobRoutes');
const app = express();
 
app.use('/api/v1/jobs', jobsRouter);

module.exports = app;
