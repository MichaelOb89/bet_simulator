// const games = require('../../data/games')
const schedule = require('node-schedule')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let games = null
const getGames = async () => {
    try {
        const response = await fetch('https://v3.football.api-sports.io/fixtures/?league=39&season=2022&next=10', {
            method: "GET",
            headers: {
                'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
            }
        })
        games = await response.json()
    } catch (error) {
        console.log(error)
    }
}



if(!games){
    getGames()
}

const job = schedule.scheduleJob('* 1 * * * ', ()=>{
    getGames()
  })


const dataController = {
    index(req, res, next){
        res.locals.data.games = games
        next()
    }
}

const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.games)
        next()
    }
}

module.exports = { dataController, apiController }