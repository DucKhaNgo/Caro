import React from "react";
import Square from "./Square";

const Board = ({props}) => {
  const { square, turn, toggleSquare, playWithBot } = props;
  const play = (square, playWithBot, index, turn) => {
    if (!playWithBot)
    {
      return toggleSquare(index, turn);
    }
    toggleSquare(index, turn);
    let value = 0;
    do {
      value = Math.floor(Math.random() * Math.floor(400));
    } while (square[value]);
    return toggleSquare(value, !turn);
  };
  let arrFather = [];
  for (let i = 0; i < 20; i += 1) {
    let arr = [];
    for (let j = 0; j < 20; j += 1) {
      const index = i * 20 + j;
      arr.push(
        <Square
          key={index}
          onClick={() => play(square,playWithBot,index, turn)}
          value={square[index]}
          id={index}
        />
      );
    }
    arrFather.push(
      <div key={i} className="btn-group">
        {arr}
      </div>
    );
  }

  return (
      <div className="board">{arrFather}</div>
  );
};

export default Board;
