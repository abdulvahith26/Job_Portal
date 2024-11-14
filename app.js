const express = require('express');
const app = express();
 
app.get('/',(request, response)=>{
    response.json({response: 'ur request hit the server , response from server '});
});

module.exports = app;
