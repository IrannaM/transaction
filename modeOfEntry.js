const mongo=require('mongoose');
const schema=mongo.Schema;
const entry=new schema({
    "mode_of_entry":{
        type:String,
        alias:"name"
    }
})