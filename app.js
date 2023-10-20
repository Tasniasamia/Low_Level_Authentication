const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/UserRoute');
require('./Config/db')
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/route/api', userRoute);
app.set('view engine', 'ejs');

// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.get('/', (req, res) => {
  res.render('index');
});
app.use((req,res,next)=>{
  res.status(404).json({message:"404 not found page"})
})
app.use((err,req,res,next)=>{
  res.status(500).json({message:"Something is broken"})
})

module.exports=app