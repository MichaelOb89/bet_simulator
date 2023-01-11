import { useState, useEffect } from "react"
import GameList from "../../components/GameList/GameList"
import Bet from "../../components/Bet/Bet"
import CurrentMoney from "../../components/CurrentMoney/CurrentMoney"
import Standings from "../../components/Standings/Standings"

export default function Home({user}){
    const [games, setGames] = useState([])
    const [match, setMatch] = useState(null)
    const [submitBet, setSubmitBet] = useState(true)
    const [standings, setStandings] = useState({})
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
    const getStandings = async () => {
        try {
            const response = await fetch('/api/standings')
            const data = await response.json()
            setStandings(data.response[0].league.standings[0])
            // console.log(data.response[0].league.standings[0][0])
        } catch (error) {
            console.log(error)
        }
    }
        const [newBet, setNewBet] = useState({
        matchId: "",
        ammount: 0,
        odds: "",
        date: "",
        team: "",
        isFinished: false,
        isPaid: false,
        user: user,
        won: null
    })
    useEffect(() =>{
        getGames()
    }, [])
    useEffect(() =>{
        getStandings()
    }, [])
    return(
    <>
        <div className="home-container">
            <GameList
            getGames={getGames}
            games={games}
            setGames={setGames}
            setMatch={setMatch}
            />
            <div className="home-container2">
                <CurrentMoney user={user}
                submitBet={submitBet}/>
                
                {match ?
                <Bet match={match}
                setMatch={setMatch}
                userId={user}
                newBet={newBet}
                setNewBet={setNewBet}
                submitBet={submitBet}
                setSubmitBet={setSubmitBet}/> : 
                <h2>Select a match to place a new bet</h2>}<br/>
                <Standings standings={standings} />
            </div>
        </div>
    </>
    )
}