// const standings = require('../../data/standings')
const schedule = require('node-schedule')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let standings = null
const getStandings = async () => {
    try {
        const response = await fetch('https://v3.football.api-sports.io/standings?league=39&season=2022', {
            method: "GET",
            headers: {
                'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
            }
        })
        standings = await response.json()
    } catch (error) {
        console.log(error)
    }
}

if(!standings){
    getStandings()
}

const job = schedule.scheduleJob('* 1 * * * ', ()=>{
    getStandings()
  })

const dataController = {
    index(req, res, next){
        res.locals.data.standings = standings
        next()
    }
}

const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.standings)
        next()
    }
}

module.exports = { dataController, apiController }