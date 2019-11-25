const express=require('express');
const route=express.Router();
const controller=require('./controller.js/txController')
const controllerAdd=require('./controller.js/addDocument')

// route.post('/insert',controller.inserts);
route.post('/add',controllerAdd.addDocument)


module.exports=route;