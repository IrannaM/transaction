const schema = require('../model/marchantSchema');

exports.insert = (req) => {
    try {
        console.log("in insert...................",req.EPI)
        schema.details.findOne({ "EPI": req.EPI ,"date":req.date}, (err, data) => {            
            if (data) {
                schema.details.updateOne({ "EPI": req.EPI ,"date":req.date},
                    {
                        $inc: {
                            "Tx_count": 1,
                            [`type_of_card.${req.type_of_card}.cardCount`]: 1,
                            [`Tx_status.${req.Tx_status}.cardCount`]: 1,
                            [`Tx_type.${req.Tx_type}.cardCount`]: 1,
                            [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardCount`]: 1
                        },
                        $set: {
                            "Tx_volume": parseInt(data.Tx_volume) + parseInt(req.Tx_volume),
                            [`type_of_card.${req.type_of_card}.cardVolume`]: parseInt(data.type_of_card[req.type_of_card].cardVolume) + parseInt(req.Tx_volume),
                            [`Tx_status.${req.Tx_status}.cardVolume`]: parseInt(data.Tx_status[req.Tx_status].cardVolume) + parseInt(req.Tx_volume),
                            [`Tx_type.${req.Tx_type}.cardVolume`]: parseInt(data.Tx_type[req.Tx_type].cardVolume) + parseInt(req.Tx_volume),
                            [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardVolume`]: parseInt(data.Tx_modeOfEntry[req.Tx_modeOfEntry].cardVolume) + parseInt(req.Tx_volume)
                        }

                    }).then((results) => {
                        console.log("updated",results);
                        // console.log(results)
                        res.send("updated")
                    }).catch((error) => {
                        console.log("in error",err);
                        // res.send(error)
                    })
            }
            else {
                const newValue = new schema.details({
                    "EPI": req.EPI,
                    [`type_of_card.${req.type_of_card}.cardCount`]: 1,
                    [`Tx_status.${req.Tx_status}.cardCount`]: 1,
                    [`Tx_type.${req.Tx_type}.cardCount`]: 1,
                    [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardCount`]: 1,

                    [`type_of_card.${req.type_of_card}.cardVolume`]:  parseInt(req.Tx_volume),
                    [`Tx_status.${req.Tx_status}.cardVolume`]: parseInt(req.Tx_volume),
                    [`Tx_type.${req.Tx_type}.cardVolume`]: parseInt(req.Tx_volume),
                    [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardVolume`]:  parseInt(req.Tx_volume),
                    "Tx_count": 1,
                    "Tx_volume": req.Tx_volume,
                    "date":req.date
                })
                newValue.save((err, result) => {
                    if (result) {
                        // res.send(result)
                        console.log("insert data sucessfully");
                    }
                    else console.log("insert data failed ", err)
                })
            }
        })
    } catch (e) {
        console.log(e);

    }
}


exports.newInsert = (req) => {
    try {
        console.log("in reqqqqqqq",req.EPI)
        schema.details.findOne({
            "EPI": req.EPI
        }).then(data => {
            // console.log("in dataaaaaaa",data);
            if (data !== null) {
                schema.details.updateOne({
                    EPI: req.EPI,
                }, {
                    $inc: {
                        "Tx_count": 1,
                        [`type_of_card.${req.type_of_card}.cardCount`]: 1,
                        [`Tx_status.${req.Tx_status}.cardCount`]: 1,
                        [`Tx_type.${req.Tx_type}.cardCount`]: 1,
                        [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardCount`]: 1

                    },
                    $set: {
                        "Tx_volume": parseInt(data.Tx_volume) + parseInt(req.Tx_volume),
                        [`type_of_card.${req.type_of_card}.cardVolume`]: parseInt(data.type_of_card[req.type_of_card].cardVolume) + parseInt(req.Tx_volume),
                        [`Tx_status.${req.Tx_status}.cardVolume`]: parseInt(data.Tx_status[req.Tx_status].cardVolume) + parseInt(req.Tx_volume),
                        [`Tx_type.${req.Tx_type}.cardVolume`]: parseInt(data.Tx_type[req.Tx_type].cardVolume) + parseInt(req.Tx_volume),
                        [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardVolume`]: parseInt(data.Tx_modeOfEntry[req.Tx_modeOfEntry].cardVolume) + parseInt(req.Tx_volume)
                    }

                }, (err, update) => {
                    console.log(update)
                    console.log("update");

                    // console.log("updated", update, err);
                })

            } else {
                const newValue = new schema.details({
                    "EPI": req.EPI,
                    [`type_of_card.${req.type_of_card}.cardCount`]: 1,
                    [`Tx_status.${req.Tx_status}.cardCount`]: 1,
                    [`Tx_type.${req.Tx_type}.cardCount`]: 1,
                    [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardCount`]: 1,

                    [`type_of_card.${req.type_of_card}.cardVolume`]: parseInt(req.Tx_volume),
                    [`Tx_status.${req.Tx_status}.cardVolume`]: parseInt(req.Tx_volume),
                    [`Tx_type.${req.Tx_type}.cardVolume`]: parseInt(req.Tx_volume),
                    [`Tx_modeOfEntry.${req.Tx_modeOfEntry}.cardVolume`]: parseInt(req.Tx_volume),
                    "Tx_count": 1,
                    "Tx_volume": req.Tx_volume
                })
                newValue.save((err, result) => {
                    if (result) {
                        // res.send(result)
                        console.log("insert data sucessfully");
                    }
                    else console.log("insert data failed ", err)
                })
            }
        })
    } catch (e) {
        console.log("err", e);
    }
}






// exports.inserts = (req,res) => {
//     try {
//         schema.details.findOne({ "EPI": req.body.epi }, (err, data) => {
//             if (data) {
//                 schema.details.findOneAndUpdate({ "EPI": req.body.epi },
//                     {
//                         $inc: {
//                             "Tx_count": 1,
//                             [`type_of_card.${req.body.card}.cardCount`]: 1,
//                             [`Tx_status.${req.body.status}.cardCount`]: 1,
//                             [`Tx_type.${req.body.type}.cardCount`]: 1,
//                             [`Tx_modeOfEntry.${req.body.entry}.cardCount`]: 1

//                         },
//                         $set: {
//                             "Tx_volume": parseInt(data.Tx_volume) + parseInt(req.body.amount),
//                             [`type_of_card.${req.body.card}.cardVolume`]: parseInt(data.type_of_card[req.body.card].cardVolume) + parseInt(req.body.amount),
//                             [`Tx_status.${req.body.status}.cardVolume`]: parseInt(data.Tx_status[req.body.status].cardVolume) + parseInt(req.body.amount),
//                             [`Tx_type.${req.body.type}.cardVolume`]: parseInt(data.Tx_type[req.body.type].cardVolume) + parseInt(req.body.amount),
//                             [`Tx_modeOfEntry.${req.body.entry}.cardVolume`]: parseInt(data.Tx_modeOfEntry[req.body.entry].cardVolume) + parseInt(req.body.amount)
//                         }
//                     }).then((results) => {
//                         // console.log("updated");
//                         res.send("updated")
//                     }).catch((error) => {
//                         res.send(error)
//                     })
//             }
//             else {
//                 const newValue = new schema.details({
//                     "EPI": req.body.epi,
//                     [`type_of_card.${req.body.card}.cardCount`]: 1,
//                     [`type_of_card.${req.body.card}.cardVolume`]: parseInt(req.body.amount),
//                     [`Tx_status.${req.body.status}.cardCount`]: 1,
//                     [`Tx_type.${req.body.type}.cardCount`]: 1,
//                     [`Tx_modeOfEntry.${req.body.entry}.cardCount`]: 1,
//                     [`Tx_status.${req.body.status}.cardVolume`]: parseInt(req.body.amount),
//                     [`Tx_type.${req.body.type}.cardVolume`]: parseInt(req.body.amount),
//                     [`Tx_modeOfEntry.${req.body.entry}.cardVolume`]: parseInt(req.body.amount),
//                     "Tx_count": 1,
//                     "Tx_volume": req.body.amount,
//                     "Tx_status": req.body.status
//                 })
//                 newValue.save((err, result) => {
//                     if (result) {
//                         res.send(result)
//                         console.log("insert data sucessfully");
//                     }
//                     else console.log("insert data failed ", err)
//                 })
//             }
//         })
//     } catch (e) {
//         console.log(e);

//     }
// }

