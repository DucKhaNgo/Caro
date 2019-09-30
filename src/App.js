import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

let lineCheck = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(20).fill(null).map(x => Array(20).fill(null))
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      isPlay: true,
      winner: null,
      position: [{
        x: 0,
        y: 0
      }],
      selected: false,
      sort: true,
      lineCheck: [{
        x: 0,
        y: 0
      }]
    };
  }
  checktrenduoi = (index, ind, player, squares) => {
    let tren = 0;
    let flag = false;
    const valueplayer = player === 'X' ? 'O' : 'X';
    lineCheck = [{ x: index, y: ind }];
    for (let i = index - 1; i >= 0; i--) {
      if (squares[i][ind] === valueplayer) {
        flag = true;
      }
      if (squares[i][ind] !== player) {
        break;
      }
      if (squares[i][ind] === player) {
        lineCheck.push({ x: i, y: ind });
        tren++;
      }

    }
    let duoi = 0;
    let flagg = false;
    for (let i = index + 1; i < 20; i++) {
      if (squares[i][ind] === valueplayer) {
        flagg = true;
      }
      if (squares[i][ind] !== player) {
        break;
      }
      if (squares[i][ind] === player) {
        lineCheck.push({ x: i, y: ind });
        duoi++;
      }

    }
    const sum = tren + duoi;
    if (sum === 4 && (!flag || !flagg)) {
      return true;
    }
    if (sum > 4) {
      return true;
    }

  }
  checktraiphai = (index, ind, player, squares) => {
    let trai = 0;
    let flag = false;
    const valueplayer = player === 'X' ? 'O' : 'X';
    lineCheck = [{ x: index, y: ind }];
    for (let i = ind - 1; i >= 0; i--) {
      if (squares[index][i] === valueplayer) {
        flag = true;
      }
      if (squares[index][i] !== player) {
        break;
      }
      if (squares[index][i] === player) {
        lineCheck.push({ x: index, y: i })
        trai++;
      }
    }
    let phai = 0;
    let flagg = false;
    for (let i = ind + 1; i < 20; i++) {
      if (squares[index][i] === valueplayer) {
        flagg = true;
      }
      if (squares[index][i] !== player) {
        break;
      }
      if (squares[index][i] === player) {
        lineCheck.push({ x: index, y: i })
        phai++;
      }
    }
    const sum = trai + phai;
    if (sum === 4 && (!flag || !flagg)) {
      return true;
    }
    if (sum > 4) {
      return true;
    }
  }
  checkcheotrai = (index, ind, player, squares) => {
    let trai = 0;
    let indexa = index - 1;
    let indb = ind - 1;
    let flag = false;
    const valueplayer = player === 'X' ? 'O' : 'X';
    lineCheck = [{ x: index, y: ind }];
    while (indexa >= 0 && indb >= 0) {
      if (squares[indexa][indb] === valueplayer) {
        flag = true;
      }
      if (squares[indexa][indb] !== player) {
        break;
      }
      if (squares[indexa][indb] === player) {
        lineCheck.push({ x: indexa, y: indb })
        trai++;
      }
      indexa--;
      indb--;
    }
    let phai = 0;
    let indexaa = index + 1;
    let indbb = ind + 1;
    let flagg = false;
    while (indexaa < 20 && indbb < 20) {
      if (squares[indexaa][indbb] === valueplayer) {
        flagg = true;
      }
      if (squares[indexaa][indbb] !== player) {
        break;
      }
      if (squares[indexaa][indbb] === player) {
        lineCheck.push({ x: indexaa, y: indbb })
        phai++;
      }
      indexaa++;
      indbb++;
    }
    const sum = trai + phai;
    if (sum === 4 && (!flag || !flagg)) {
      return true;
    }
    if (sum > 4) {
      return true;
    }
  }
  checkcheophai = (index, ind, player, squares) => {
    let trai = 0;
    let indexa = index - 1;
    let indb = ind + 1;
    let flag = false;
    const valueplayer = player === 'X' ? 'O' : 'X';
    lineCheck = [{ x: index, y: ind }];
    while (indexa >= 0 && indb < 20) {
      if (squares[indexa][indb] === valueplayer) {
        flag = true;
      }
      if (squares[indexa][indb] !== player) {
        break;
      }
      if (squares[indexa][indb] === player) {
        lineCheck.push({ x: indexa, y: indb });
        trai++;
      }
      indexa--;
      indb++;
    }
    let phai = 0;
    let indexaa = index + 1;
    let indbb = ind - 1;
    let flagg = false;
    while (indexaa < 20 && indbb >= 0) {
      if (squares[indexaa][indbb] === valueplayer) {
        flagg = true;
      }
      if (squares[indexaa][indbb] !== player) {
        break;
      }
      if (squares[indexaa][indbb] === player) {
        lineCheck.push({ x: indexaa, y: indbb })
        phai++;
      }
      indexaa++;
      indbb--;
    }
    const sum = trai + phai;
    if (sum === 4 && (!flag || !flagg)) {
      return true;
    }
    if (sum > 4) {
      return true;
    }
  }
  playagain = () => {
    this.setState({
      history: [
        {
          squares: Array(20).fill(null).map(x => Array(20).fill(null))
        }
      ],
      xIsNext: true,
      isPlay: true,
      winner: null,
      stepNumber: 0,
      position: [{
        x: 0,
        y: 0
      }],
      selected: false,
      sort: true
    });
  }
  changeColor = () => {
    lineCheck.forEach((elem, index) => {

    });
  };
  handleclick = (index, ind) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    const current = history[history.length - 1];
    const clone = JSON.parse(JSON.stringify(current));
    let squares = clone.squares.slice();
    if (this.state.winner) {
      return;
    }
    let winner = null;
    if (!squares[index][ind]) {
      squares[index][ind] = this.state.xIsNext ? 'X' : 'O';
      if (this.checktrenduoi(index, ind, squares[index][ind], squares)
        || this.checktraiphai(index, ind, squares[index][ind], squares)
        || this.checkcheotrai(index, ind, squares[index][ind], squares)
        || this.checkcheophai(index, ind, squares[index][ind], squares)) {
        winner = squares[index][ind];
        this.changeColor();
      }
      const position = this.state.position;
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        winner,
        position: position.concat([
          {
            x: index,
            y: ind
          }
        ])
      });
    }
  };
  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      selected: step
    });
  }
  handleSort = () => {
    this.setState({
      sort: !this.state.sort
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + `(${this.state.position[move].x}:${this.state.position[move].y})` :
        'Go to game start';
      if (move !== this.state.selected) {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      } else {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}><b>{desc}</b></button >
          </li >
        );
      }
    });
    if (!this.state.sort) {
      moves = moves.reverse();
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            stepNumber={this.state.stepNumber}
            xIsNext={this.state.xIsNext}
            isPlay={this.state.isPlay}
            winner={this.state.winner}
            handleclick={(index, ind) => this.handleclick(index, ind)}
            playagain={() => this.playagain()}
            lineCheck={this.state.winner ? lineCheck : ''}
          />
        </div>
        <div className="game-info">
          <button onClick={this.handleSort}>sort {this.state.sort ? 'descending ' : 'ascending'}</button>
          <ol reversed={!this.state.sort}>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
