//Setting up the Actions.
const ISP=require('../models/ISP');

  

//Get all ISP.
module.exports.getISP=async function(req,res){
    
    try{
        const isps=await ISP.find();
        res.json(200,{
            message:isps
        })
    }catch(err){
        console.log('Error in getting ISP:',err);
        res.json(500,{
            message:'Internal Server Error'
        })
    }
}

//Create a new ISP.
module.exports.createISP=async function(req,res){
    console.log("Creating ISP");
    try{
        console.log("body:",req.body);
        const isp=await ISP.create({
            name:req.body.name,
            location:req.body.location,
            services:[req.body.services],
            description:req.body.description,
            pricing:req.body.pricing,
            rating:req.body.rating,
            speed:req.body.speed,
            contact_number:req.body.contact_number,
            email:req.body.email,
            speed:req.body.speed 
        });
        res.json(200,{
            message:isp
        })
    }catch(err){
        console.log("Error in Creating ISP",err);
        res.json(500,{
            message:'Internal Server Error'
        })
    }
}

module.exports.getISPdetails=async function(req,res){
    try{
        console.log("id:",req.params.id);
        const ispDetails=await ISP.findById(req.params.id)
        res.json(200,{
            message:ispDetails
        })
    }catch(error){
        console.log("Error in ISP Details",error);
        res.json(500,{
            message:"Internal Server Error"
        })
    }
}