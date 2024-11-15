const express = require('express');
const jobController = require('../conrollers/jobController');
const jobsRouter= express.Router();

jobsRouter.get('/',jobController.getAllJobs);
jobsRouter.get('/:id',jobController.getJobByID);
jobsRouter.post('/',jobController.createJob);
jobsRouter.put('/:id',jobController.updateJob);
jobsRouter.delete('/:id',jobController.deleteJob);

module.exports = jobsRouter;