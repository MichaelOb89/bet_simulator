
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let pastGames = null
const getGames = async () => {
    try {
        const response = await fetch('https://v3.football.api-sports.io/fixtures/?league=39&season=2022&last=99', {
            method: "GET",
            headers: {
                'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
            }
        })
        pastGames = await response.json()
        console.log(pastGames)
    } catch (error) {
        console.log(error)
    }
}

if(!pastGames){
    getGames()
}


module.exports = pastGames