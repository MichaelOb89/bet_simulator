export default function LiveBets({ bet }) {
  return (
    <div className="bet-component">
      <li key={bet._id}>
        <h3>BET #{bet._id.slice(-5)}</h3>  
        <h3>You have ${bet.ammount} on {bet.team}. Waiting for results</h3>
      </li>
    </div>
  );
}
