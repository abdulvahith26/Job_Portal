const mongoose = require('mongoosse');

//create schema
const jobSchema = new mongoose.Schema({
    title:String,
    descripition:String,
    location:String,
    salary:String,
    experiense: String,
    skills:[String],
        type: {
        type:String, 
        enum:['FUll-time', 'Part-time', 'contract' , 'Freelance' ],
        default: 'full-time'
        },
    CreatedAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
});
moddule.exports=mongoose.model('Job', jobSchema, 'jobs');
