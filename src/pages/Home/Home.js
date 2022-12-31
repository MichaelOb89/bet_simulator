import { useState, useEffect } from "react"
import GameList from "../../components/GameList/GameList"

export default function Home(props){
    const [games, setGames] = useState([])
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
    <GameList
    getGames={getGames}
    games={games}
    setGames={setGames}
    />
    )
}