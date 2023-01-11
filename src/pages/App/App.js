import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import BetHistory from '../BetHistory/BetHistory';
import Nav from '../../components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import { getUser } from '../../utilities/users-service';


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className='App'>
      { user ?
        <>
          <Nav user={user} setUser={setUser}/>
          <Routes>
            <Route path='/' element={<Home user={user}/>}/>
            <Route path='/history' element={<BetHistory user={user}/>}/>
          </Routes>
        </> :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
