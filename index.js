const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL)
           .then(()=>{
               console.log("connect to DB");
                app.listen(3001,()=>{
                console.log('server is running on the port:3001');
                });
           })
           .catch((err)=>{
               console.log("connection failed");
               console.log(err);    
           });

   
