const mongoose = require("mongoose");
const shop = new mongoose.Schema({
    "EPI": {
        type: Number,
        require: true
    },
    "type_of_card": {
        type:String,
        require:true,
        default:''
    },
    "Tx_volume": {
        type: Number,
        require: true,
        default:0
    },
    "Tx_status": {
        type:String,
        require:true,
        default:''
    },
    "Tx_modeOfEntry": {
        type:String,
        require:true,
        default:''
    },
    "Tx_type": {
        type:String,
        require:true,
        default:''
    },
    "date":{
        type:Date,
        require:true
    }
}, {
    timestamps: true
})

exports.details = mongoose.model("cs", shop)


