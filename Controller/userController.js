
const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');
const userSehema = require('../Modules/userSehema');
const saltRounds = 10;
const HomePage=(req,res)=>{
    res.render('index')
}
const ResisterPage=(req,res)=>{
    res.render('resister')
}
const CreateUser=async(req,res)=>{
    const { name,email,password }=req.body
    const user=await userSehema.findOne({email:email})
    if(user){
      return  res.status(400).send({message:"The user is already exists"})
    }
    bcrypt.hash(password, saltRounds,async function(err, hash) {
        const newUser= new userSehema({
            id:uuid(),
            name:name,
            email:email,
            password:hash
        })
        if(newUser){
            await newUser.save()
            res.redirect('/route/api/login')
        }
    });
   
}
const LoginUSer=async(req,res)=>{
    const {email, password}=req.body
    const exitUser=await userSehema.findOne({email:email});
    bcrypt.compare(password, exitUser.password, function(err, result) {
        if(result){
            // res.send("You are logged in")
            res.redirect('/route/api/profile')
        }    });
   
}
const LoginPage=(req,res)=>{
    res.render('login')
}
const Profile=(req,res)=>{
    res.render('Profile')
}
const LogOUT=(req,res)=>{
    res.redirect('/')
}
module.exports={HomePage,ResisterPage,CreateUser,LoginPage,LoginUSer,LogOUT,Profile}