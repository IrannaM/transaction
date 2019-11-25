const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const route=require('./router');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',route)

app.listen(3000,()=>{
    console.log("port is running on 3000")
})
mongoose.connect('mongodb://localhost:27017/transaction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
})
.then((res)=>{
    console.log("mongo connection is successfully")
})
.catch((err)=>{
    console.log("connection failed",err);
})

// const shop=new mongoose.Schema({
//     "card_Name":{
//         type:String,
//     },
//     "insert_Card":{
//         type:Boolean
//     },
//     "counts":{
//         type:Number,
//         default:0
//     }
// },
//     {
//         timestamps:true
//     }
// )
// const card=mongoose.model("creditCard",shop)

// var details=[{
//     "card_Name":"rupee",
//     "insert"
// }]
// card.insertMany({"card_Name":"masterCard","insert_Card":true,"counts":0},(err,result)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log(result)
//     }
// })

// card.findOneAndUpdate({"card_Name":"masterCard"},{$inc:{"counts":1}},(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log("in update",result); 
//     }
// })

// card.find({},(err,result)=>{
//     if(result){
//         console.log("in findAll",result);
//     }
//     else{
//         console.log("error",err);
//     }
// })
