import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={'log-out'}>
    <div>{user.name}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}