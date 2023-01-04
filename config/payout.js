// const game = require('../data/games')
require('dotenv').config()
require('./database')

const Bet = require('../models/bet')



Bet.find({isFinished: true}, (err, foundBets) => {
    if (err) {
      res.status(400).send({
        msg: err.message,
      });
    } else {
        console.log(foundBets)
    }
  });

// const day = new Date("2023-01-04T03:50:00.000Z")
// console.log(Date.parse(day))
// if(Date.now()>(Date.parse(day))){
//     console.log(true)   
// } else {
//     console.log(false)
// }