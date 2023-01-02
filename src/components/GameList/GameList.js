import Game from '../Game/Game'

export default function GameList({ getGames, games, setGames, setMatchId }){
    return(
        <>
            {
                games.length ? 
                (
                <div className='game-list'>
                    <h2>Upcoming Games</h2>
                    <ul>
                    {games.map((game)=>{
                        return(
                            <Game game={game}
                            key={game.fixture.id}
                            setMatchId={setMatchId}/>
                        )
                    })}
                    </ul>
                </div>)
                : ""
            }
        </>
    )    
}