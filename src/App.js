import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const[state, setState] = useState(null)
  const fetchState = async () => {
    try{
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  return (
    <div className="App">
      {state && state.eureka ? <>{state.eureka}</> : <>You are still Looking. Don't give up</>}
    </div>
  );
}

export default App;
