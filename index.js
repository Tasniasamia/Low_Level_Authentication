const app=require('./app');
require('dotenv').config();
require('./Config/db');

const PORT=process.env.PORT || 3032

app.listen(PORT,(req,res)=>{
    console.log(`My Server is http://localhost:${PORT}`)
})