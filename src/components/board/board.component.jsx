import React, { useState } from "react";
import evaluate from "../../utils/utils";

import "./board.component.css";

const Board = (props) => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const handleClick = (index) => {
    let newCells = [...cells];
    newCells[index] = props.turn;
    setCells(newCells);
    if (props.turn === "X") {
      props.setTurn("O");
    } else {
      props.setTurn("X");
    }
    let result = evaluate(newCells);
    if (result) {
      setWinner(result);

      if (result === "X") {
        let newPoints = { ...props.points, xPoint: props.points.xPoint + 1 };
        props.setPoints(newPoints);
        localStorage.setItem("points", JSON.stringify(newPoints));
      } else if (result === "O") {
        let newPoints = { ...props.points, oPoint: props.points.oPoint + 1 };
        props.setPoints(newPoints);
        localStorage.setItem("points", JSON.stringify(newPoints));
      }
    }
  };
  const restart = () => {
    const emptyCell = Array(9).fill("");
    setCells(emptyCell);
    setWinner("");
  };
  return (
    <div className="container">
      {cells.map((cell, index) => (
        <div
          className={`box ${cell}`}
          onClick={() => handleClick(index)}
          key={index}
        >
          {cell}
        </div>
      ))}
      {winner.length ? (
        <div className="result">
          <span>{winner}</span>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Board;
