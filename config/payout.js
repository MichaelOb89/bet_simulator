// const game = require('../data/games')

const pastGames = require('../data/finishedGames')
require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet')

const today = new Date() 

function betUpdater(){
  Bet.updateMany({
    date:{$lt: today}
  }, {isFinished: true})
  .then(()=>db.close())
}



console.log(games2)

function betPayer(){
  Bet.find({isFinished: true, isPaid: false}, (err, foundBets) => {
    
      // if(true){
        //check for winner and update bet.won based on whether user has won the bet or lost
      // }
    });
  }
  //.then(()=>db.close())


betPayer()
//betUpdater()
