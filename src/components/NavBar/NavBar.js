import { Link } from 'react-router-dom'

export default function Nav(props){
    return (
    <nav>
        <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='/orders/new'>New Order</Link>
    </nav>
    )
}