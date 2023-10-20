const express=require('express');
const { HomePage,ResisterPage,CreateUser,LoginPage,LoginUSer,LogOUT,Profile } = require('../Controller/userController');
const route=express.Router();

route.get('/',HomePage);
route.get('/resister',ResisterPage);
route.post('/resister',CreateUser);
route.get('/login',LoginPage);
route.post('/login',LoginUSer);
route.get('/profile',Profile);
route.get('/logout',LogOUT);


module.exports=route

