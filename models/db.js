const mongoose = require('mongoose');
const url = "mongodb+srv://ldqs:ldqs@cluster0.fjzaw.mongodb.net/atnDB"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');
require('./employee.model');
