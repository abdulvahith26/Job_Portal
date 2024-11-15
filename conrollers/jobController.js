const jobController = {
    getAllJobs : async (request,response)=>{
        try{
            const jobs =await job.find();
            response.status(200).json()
            response.send('its working ');
             

        }catch(error){
            response.status(500).json({message: error.message}) 
        }
    },
    getJobByID : async (request,response)=>{
        try{

        }catch(error){

        }
    },
    createJob : async (request,response)=>{
        try{

        }catch(error){

        }
    },
    updateJob : async (request,response)=>{
        try{

        }catch(error){

        }
    },
    deleteJob : async (request,response)=>{
        try{

        }catch(error){

        }
    }

}
module.exports = jobController ;