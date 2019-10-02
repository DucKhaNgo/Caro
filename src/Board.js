/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from "react";
import Square from "./Square";
import "./App.css";

class Board extends React.Component {
  renderSquare = i => {
    const arr = Array(20)
      .fill(null)
      .map(x => Array(20).fill(null));
    const boa = arr.map((item, index) => {
      const smallboa = item.map((elem, ind) => {
        let iscolor = false;
        if (this.props.lineCheck) {
          this.props.lineCheck.forEach(element => {
            if (index === element.x && ind === element.y) {
              iscolor = true;
            }
          });
        }
        return (
          <Square
            value={this.props.squares[index][ind]}
            click={() => this.props.handleclick(index, ind)}
            iscolor={iscolor}
          />
        );
      });
      return <div className="board-row">{smallboa}</div>;
    });
    const nexplayer = this.props.xIsNext ? "X" : "O";
    const status = `Next Player: ${nexplayer}`;
    return (
      <div>
        <div className="status">{status}</div>
        <h1>
          {this.props.winner ? `The winner is: ${this.props.winner}` : ""}
        </h1>
        <button onClick={() => this.props.playagain()}>Play Again</button>
        <p />
        <div>{boa}</div>
      </div>
    );
  };

  render() {
    return this.renderSquare(1);
  }
}

export default Board;
