import { useState, useEffect } from "react"
import GameList from "../../components/GameList/GameList"
import Bet from "../../components/Bet/Bet"

export default function Home(props){
    const [games, setGames] = useState([])
    const [matchId, setMatchId] = useState(null)
    //Retrieves upcoming games from the backend
    const getGames = async () => {
        try{
            const response = await fetch('/api/games')
            const data = await response.json()
            setGames(data.response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() =>{
        getGames()
    }, [])

    return(
    <>
        <div className="home-container">
            <GameList
            getGames={getGames}
            games={games}
            setGames={setGames}
            setMatchId={setMatchId}
            />
            {matchId ? <Bet matchId={matchId}/> : 
            <h2>Select a match to place a bet</h2>}
        </div>
    </>
    )
}