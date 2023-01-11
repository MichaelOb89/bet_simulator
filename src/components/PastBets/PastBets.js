

export default function PastBets({bet}) {
  return (
    <div className="bet-component">
      <li key={bet._id}>
        <h3>BET#{bet._id.slice(-5)}</h3>
        {bet.won? 
        <h3>You won ${bet.ammount*(bet.odds-1).toFixed(2)} betting on {bet.team}</h3>:
        <h3>You lost ${bet.ammount.toFixed(2)} betting on {bet.team}</h3>}
      </li>
    </div>
  );
}
