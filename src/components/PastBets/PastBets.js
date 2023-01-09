

export default function PastBets({bet}) {
  return (
    <li key={bet._id}>
      {/* {fisnishedBets.map((bet) => {
        return (
          <li key={bet._id}>
            <h3>{bet._id}</h3>
            {bet.won ? (
              <h3>
                You won {bet.ammount * bet.odds} betting on {bet.team}
              </h3>
            ) : (
              <h3>
                You Lost {bet.ammount} betting on {bet.team}
              </h3>
            )}
          </li>
        );
      })} */}
    <h3>{bet._id.slice(-5)}</h3>
    {bet.won? 
    <h3>You won ${bet.ammount*(bet.odds-1)} betting on {bet.team}</h3>:
    <h3>You lost ${bet.ammount} betting on {bet.team}</h3>}
    </li>
  );
}
