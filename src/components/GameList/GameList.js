import Game from '../Game/Game'

export default function GameList({ getGames, games, setGames }){
    return(
        <>
            {
                games.length ? 
                (
                <>
                    <h2>Upcoming Games</h2>
                    <ul>
                    {games.map((game)=>{
                        return(
                            <Game game={game}
                            key={game.fixture.id}/>
                        )
                    })} 
                    </ul>
                </>)
                : ""
            }
        </>
    )    
}