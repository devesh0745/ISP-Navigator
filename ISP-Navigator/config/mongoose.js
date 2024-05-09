//Connecting to the DB
const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/ISP_Navigstor_db');

const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error in connecting to MongoDB'));


db.once('open',function(){
    console.log('Connected to Database::MongoDB');
});
module.exports=db;