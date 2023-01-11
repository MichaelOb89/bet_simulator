require('dotenv').config()
const schedule = require('node-schedule')
const db = require('./database')
const Bet = require('../models/bet')
// const pastGames = require('../data/finishedGames').response;
const pastGames = require('../controllers/api/pastGames')

const findBets = async () => {
    return Bet.find({isFinished: true, isPaid: false}).exec()
} 

const payout = async () => {
    // const data = await fetch('http://localhost:3001/api/bets')
    // const bets = await data.json()
    const bets = await findBets()
    //console.log(bets)
    
    bets.forEach(bet => {
        const foundGame = pastGames.response.find(game=>game.fixture.id==bet.matchId)
        // updateBetWinner(bet, foundGame)
        if(bet.team == "Draw" && (!foundGame.teams.home.winner && !foundGame.teams.away.winner)){
            console.log("Won bet!")
            Bet.findByIdAndUpdate(bet._id, {won: true, isPaid: true}).exec()
        } else if((bet.team == foundGame.teams.home.name) && (foundGame.teams.home.winner)){
            console.log("Won bet!")
            Bet.findByIdAndUpdate(bet._id, {won: true, isPaid: true}).exec()
        } else if((bet.team == foundGame.teams.away.name) && (foundGame.teams.away.winner)){
            console.log("Won Bet!!!")
            Bet.findByIdAndUpdate(bet._id, {won: true, isPaid: true}).exec()
        } else {
            console.log("LOST BET!")
            Bet.findByIdAndUpdate(bet._id, {won: false, isPaid: true}).exec()
        }
    });
}


const job = schedule.scheduleJob('* 1 * * * ', ()=>{
    payout()
  })


module.exports = job