const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Demoexcel',{useNewUrlParser:true})
.then(()=>{console.log('connected to db')})
.catch((error)=>{console.log('error',error)});


