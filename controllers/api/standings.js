const standings = require('../../data/standings')

// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// let standings = null
// const getGames = async () => {
//     try {
//         const response = await fetch('https://v3.football.api-sports.io/standings?league=39&season=2022', {
//             method: "GET",
//             headers: {
//                 'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
//             }
//         })
//         standings = await response.json()
//         console.log(standings)
//     } catch (error) {
//         console.log(error)
//     }
// }

if(!standings){
    getGames()
}

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