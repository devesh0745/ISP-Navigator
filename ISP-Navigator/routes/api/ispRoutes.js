//Routes for ISP actions.
const express=require('express');
const router=express.Router();

const ispController=require('../../controllers/ispActions');

router.get('/getISP',ispController.getISP);
router.post('/setISP',ispController.createISP);
router.get('/getISPDetails/:id',ispController.getISPdetails);

module.exports=router;

