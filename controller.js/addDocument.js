const schema = require('../model/cs');
const counter=require("./txController")
// const csvFilePath = '/home/isoaccess/snap/skype/oneData.csv' ,
// const csvFilePath = '/home/isoaccess/snap/skype/common/transactions_201911191846.csv'
const csvFilePath = '/home/isoaccess/snap/skype/common/transactions_201911251142.csv'

const csv = require('csvtojson')

// exports.addDocument = (req, res) => {
//     csv()
//         .fromFile(csvFilePath)
//         .then((jsonObj) => {
//             jsonObj.forEach( (obj,key)=> {
//                 setTimeout(()=>{
//                 const dateFormate = new Date(obj.date).toString().slice(0,15);
//                 const newValue = new schema.details({
//                     "EPI": obj.epi,
//                     "type_of_card":obj.card,
//                     "Tx_volume":obj.amount,
//                     "Tx_status":obj.status,
//                     "Tx_modeOfEntry":obj.entry,
//                     "Tx_type":obj.type,
//                     "date":dateFormate
//                 })
//                 newValue.save((err, result) => {
//                     if (result) {
//                         // res.send(result)
//                         // console.log("insert jsonData sucessfully",result);
//                         counter.insert(result)
//                         res.status(200).end("saved");
//                     }
//                     else console.log("insert data failed ", err)
//                 })
//             },key*25)
                
//             })
//         })
// }


exports.addDocument = (req, res) => {
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            // console.log("in adddocument",jsonObj)
            let obj = jsonObj.filter(ele => ['SALE', 'AUTH', 'REFUND'].includes(ele.txn_type) && [ 'Amex', 'MasterCard', 'Visa','Discover','Maestro'].includes(ele.card_scheme))
            obj.forEach( (obj,key)=> {
                setTimeout(()=>{
                // const dateFormate = new Date(obj.created_at).toString().slice(0,15);
                const newValue = new schema.details({
                    "EPI": obj.epi_id,
                    "type_of_card":obj.card_scheme,
                    "Tx_volume":obj.amount,
                    "Tx_status":obj.pos_condition_code,
                    "Tx_modeOfEntry":obj.pos_entry_mode,
                    "Tx_type":obj.txn_type,
                    "date": new Date(obj.created_at)
                })
                newValue.save((err, result) => {
                    if (result) {
                        // res.send(result)
                        // console.log("insert jsonData sucessfully",result);
                        // counter.insert(result)
                        counter.newInsert(result)
                        res.status(200).end("saved");
                    }
                    else console.log("insert data failed ", err)
                })
            },key*25)
                
            })
        })
}


