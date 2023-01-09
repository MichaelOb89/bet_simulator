

export default function Standings({standings}){
    return(
        <>
            {standings.length ? 
            // <h4>{standings[0].team.name}</h4> 
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
                {standings.map((team)=>{
                    return(
                        <tr>
                            <td>{team.rank}</td>
                            <td>{team.team.name}</td>
                            <td>{team.points}</td>
                        </tr>
                    )
                })}
            </table>: 
            <h4>Waiting</h4>}
        </>
    )
}