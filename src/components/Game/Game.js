import { useState } from "react"

export default function Game({game, setMatch}){
    const openBetComponent = (match) => { 
        setMatch(match)
    }
    return(
        <div className="game-container">
            <img src={game.teams.home.logo}/><img src={game.teams.away.logo}/><br/>
            <h3>{game.teams.home.name}&nbsp;x&nbsp;{game.teams.away.name}</h3><button onClick={()=>openBetComponent(game)}>Click here to place a bet</button>
        </div>
    )
}