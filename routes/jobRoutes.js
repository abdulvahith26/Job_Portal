const express = require('express');
const jobRouter= express.Router();

jobRouter.get('/',(request, response)=>{
    response.json({response: 'ur request hit the server , response from server '});
});


module.exports = jobRouter;