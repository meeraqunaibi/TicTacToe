import { useState } from "react";
import "./App.css";
import Board from "./components/board/board.component";
import Header from "./components/header/header.component";

function App() {
  const [turn, setTurn] = useState("X");
  const [points, setPoints] = useState(
    JSON.parse(localStorage.getItem("points")) || { oPoint: 0, xPoint: 0 }
  );

  return (
    <div className="App">
      <Header turn={turn} points={points} />
      <Board
        turn={turn}
        setTurn={setTurn}
        setPoints={setPoints}
        points={points}
      />
    </div>
  );
}

export default App;
