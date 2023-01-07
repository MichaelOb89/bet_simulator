require('dotenv').config()
const db = require('./database')
const Bet = require('../models/bet')
const pastGames = require('../data/finishedGames').response;
const { response } = require('../data/finishedGames');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const payout = async () => {
    const data = await fetch('http://localhost:3001/api/bets')
    const bets = await data.json()
    // console.log(bets)
    bets.forEach(bet => {
        const matchId = bet.matchId
        const foundGame = pastGames.find(game=>game.fixture.id==bet.matchId)
        // console.log(foundGame)
        console.log(bet._id)
        if(bet.team == "Draw" && (!foundGame.teams.home.winner && !foundGame.teams.away.winner)){
            console.log("Won bet!")
            Bet.findByIdAndUpdate(bet._id, {won: true}).exec()
        } else if((bet.team == foundGame.teams.home.name) && (foundGame.teams.home.winner)){
            console.log("Won bet!")
            Bet.findByIdAndUpdate(bet._id, {won: true}).exec()
        } else if((bet.team == foundGame.teams.away.name) && (foundGame.teams.away.winner)){
            console.log("Won Bet!!!")
            Bet.findByIdAndUpdate(bet._id, {won: true}).exec()
        } else {
            console.log("LOST BET!")
            Bet.findByIdAndUpdate(bet._id, {won: false}).exec()
        }
    });
}


payout()

