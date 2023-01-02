import { useState, useEffect } from "react";


export default function Bet({matchId}){
    const [homeOdds, setHomeOdds] = useState(null)
    const [awayOdds, setAwayOdds] = useState(null)
    const getOdds = async (id) => {
        try {
            const response = await fetch(`https://v3.football.api-sports.io/odds?season=2022&fixture=${id}&bookmaker=8&league=39`, {
                method: "GET",
                headers: {
                    'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
                }
            })
            const data = await response.json()
            console.log(data)
            setHomeOdds(data.response[0].bookmakers[0].bets[0].values[0].odd)
            setAwayOdds(data.response[0].bookmakers[0].bets[0].values[2].odd)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getOdds(matchId)
    }, [matchId])
    
    return(
        <>
            <h1>Bet on match {matchId}</h1>
            <h2>Home:&nbsp;{homeOdds} Away: &nbsp;{awayOdds}</h2>
        </>
    )
}