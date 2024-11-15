const express = require('express');
const jobController = require('../conrollers/jobController');
const jobsRouter= express.Router();

jobsRouter.get('/',jobController.getAllJobs);
jobsRouter.get('/:id',jobController.getJobBYID)

module.exports = jobsRouter;