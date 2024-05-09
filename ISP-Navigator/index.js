const express=require('express');
const cors=require('cors');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(cors());

app.use(express.urlencoded({
    extended:true
}))

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in Running Server:${err}`)
    };
    console.log(`Server running on port:${port}`)
});


