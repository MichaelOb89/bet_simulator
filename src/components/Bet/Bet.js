import { useState, useEffect } from "react";


export default function Bet({match, setMatch}){
    const [homeOdds, setHomeOdds] = useState(null)
    const [awayOdds, setAwayOdds] = useState(null)
    const [drawOdds, setDrawOdds] = useState(null)
    const [newBet, setNewBet] = useState({
        matchId: "",
        ammount: 0,
        odds: "",
        team: "",
        isFinished: false
    })
    const getOdds = async (id) => {
        try {
            const response = await fetch(`https://v3.football.api-sports.io/odds?season=2022&fixture=${match.fixture.id}&bookmaker=8&league=39`, {
                method: "GET",
                headers: {
                    'x-rapidapi-key': "1fd0402486a237566b7b4083f1a0c484"
                }
            })
            const data = await response.json()
            console.log(data)
            setHomeOdds(data.response[0].bookmakers[0].bets[0].values[0].odd)
            setAwayOdds(data.response[0].bookmakers[0].bets[0].values[2].odd)
            setDrawOdds(data.response[0].bookmakers[0].bets[0].values[1].odd)
        } catch (error) {
            console.log(error)
        }
    }

    const createBet = async (evt) => {
        try {
            const response = await fetch(`/api/bets`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newBet})
            })
            setNewBet({
                    matchId: "",
                    ammount: 0,
                    odds: "",
                    team: "",
                    isFinished: false
            })
            setMatch(null)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (evt) => {
        setNewBet({...newBet, [evt.target.name]: evt.target.value,
        matchId: match.fixture.id})
    }

    const optionChangeHandler = (evt) => {
        if(evt.target.value==match.teams.home.name){
            setNewBet({...newBet, team: evt.target.value,
            odds: homeOdds})
        } else if(evt.target.value==match.teams.away.name){
            setNewBet({...newBet, team: evt.target.value,
            odds: awayOdds})
        } else if(evt.target.value=="Draw"){
            setNewBet({...newBet, team: "Draw",
            odds: drawOdds})
        }
    }

    useEffect(() => {
        getOdds(match)
    }, [match])
    
    return(
        <>
            <h1>Bet on {match.teams.home.name}&nbsp;x&nbsp;{match.teams.away.name}</h1>
            <h2>Home:&nbsp;{homeOdds} Away: &nbsp;{awayOdds} Draw: &nbsp;{drawOdds}</h2>
            <input name="ammount" value={newBet.ammount} onChange={handleChange}></input><br/>
            <select value={newBet.team} name="team" onChange={optionChangeHandler}>
                <option value={match.teams.home.name}>{match.teams.home.name}</option>
                <option value={match.teams.away.name}>{match.teams.away.name}</option>
                <option value={"Draw"}>Draw</option>
            </select>
            <button onClick={createBet}>Submit Bet</button>
        </>
    )
}