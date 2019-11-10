import React, {useState} from 'react';
import Display from './Components/Display';
import Dashboard from './Components/Dashoboard';
import FooterComp from './Components/Footer';
import './App.css';



function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
 
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}/>
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit}/>
      <FooterComp />
    </div>
  );
}

export default App;
