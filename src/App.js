import { useState } from 'react';
import './App.css';
import Board from './components/board/board.component';
import Header from './components/header/header.component';

function App() {
  const [turn, setTurn] = useState('X');
  const [points, setPoints] = useState({xPoint:0, oPoint:0});

  return (
    <div className="App">
      <Header turn={turn} points={points} />
      <Board turn={turn} setTurn={setTurn} setPoints={setPoints}/>
    </div>
  );
}

export default App;
