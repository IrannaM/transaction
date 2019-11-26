const mongoose = require("mongoose");
// const shop = new mongoose.Schema({
//     "EPI": {
//         type: Number,
//         require: true
//     },
//     "type_of_card": {
//         visa: {
//             "cardVolume": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//         },
//         masterCard: {
//             "cardVolume": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//         },
//         rupay: {
//             "cardVolume": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 require: true,
//                 default: 0
//             },
//         }

//     },
//     "Tx_count": {
//         type: Number,
//         require: true,
//     },
//     "Tx_volume": {
//         type: Number,
//         require: true,
//     },
//     "Tx_status": {
//         approve: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//         decline: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             },
//         }
//     },
//     "Tx_modeOfEntry": {
//         swipe: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//         chip: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//         keyEntry: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//     },
//     "date":{
//         type:String,
//         require:true
//     },
//     "Tx_type": {
//         sale: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//         refund: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             }
//         },
//         auth: {
//             "cardVolume": {
//                 type: Number,
//                 default: 0
//             },
//             "cardCount": {
//                 type: Number,
//                 default: 0
//             },
//         }
//     }
// }, {
//     timestamps: true
// })
// exports.details = mongoose.model("txDetails", shop)


const shop = new mongoose.Schema({
    "EPI": {
        type: Number,
        require: true
    },
    "type_of_card": {
        Visa: {
            "cardVolume": {
                type: Number,
                require: true,
                default: 0
            },
            "cardCount": {
                type: Number,
                require: true,
                default: 0
            },
        },
        MasterCard: {
            "cardVolume": {
                type: Number,
                require: true,
                default: 0
            },
            "cardCount": {
                type: Number,
                require: true,
                default: 0
            },
        },
        Amex: {
            "cardVolume": {
                type: Number,
                require: true,
                default: 0
            },
            "cardCount": {
                type: Number,
                require: true,
                default: 0
            },
        },
        Discover: {
            "cardVolume": {
                type: Number,
                require: true,
                default: 0
            },
            "cardCount": {
                type: Number,
                require: true,
                default: 0
            },
        },
        Maestro: {
            "cardVolume": {
                type: Number,
                require: true,
                default: 0
            },
            "cardCount": {
                type: Number,
                require: true,
                default: 0
            },
        }

    },
    "Tx_count": {
        type: Number,
        require: true,
    },
    "Tx_volume": {
        type: Number,
        require: true,
    },
    "Tx_status": {
        approve: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
        decline: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            },
        }
    },
    "Tx_modeOfEntry": {
        swipe: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
        chip: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
        keyEntry: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
    },
    "date":{
        type:Date,
        require:true
    },
    "Tx_type": {
        SALE: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
        REFUND: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            }
        },
        AUTH: {
            "cardVolume": {
                type: Number,
                default: 0
            },
            "cardCount": {
                type: Number,
                default: 0
            },
        }
    }
}, {
    timestamps: true
})
exports.details = mongoose.model("txDetails", shop)



