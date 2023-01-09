import { Link } from 'react-router-dom'
import UserLogOut from '../UserLogOut/UserLogOut'

export default function Nav({ user, setUser }){
    return (
    <nav>
        <Link to='/'>Home</Link>
        &nbsp; | &nbsp;
        <Link to='/history'>Previous Bets</Link>
        <UserLogOut user={user} setUser={setUser}/>
    </nav>
    )
}