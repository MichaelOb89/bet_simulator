import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Nav from '../../components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import FruitsPage from '../FruitsPage/FruitsPage';

function App() {
  const[state, setState] = useState(null)
  const [user, setUser] = useState(null)
  
  return (
    <main className='App'>
      { user ?
        <>
          <Nav />
          <Routes>
            <Route path='/fruits' element={<FruitsPage />}/>
            <Route path='/orders/new' element={<NewOrderPage />}/>
            <Route path='/orders' element={<OrderHistoryPage />}/>
            <Route path='/' element={<NewOrderPage />}/>
          </Routes>
        </> :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
