const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EJSTEMPLATE')
.then(()=>{console.log("mongoose is connected")})
.catch((error)=>{console.log(error)})