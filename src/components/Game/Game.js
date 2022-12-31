

export default function Game({game}){
    return(
        <>
            <img src={game.teams.home.logo}/><img src={game.teams.away.logo}/><br/>
            <h3>{game.teams.home.name}&nbsp;x&nbsp;{game.teams.away.name}</h3><button>Click here to place a bet</button>
        </>
    )
}