import React from 'react';

const History = ({props}) => {
  const arr = [];
  let toadoX = 0;
  let toadoY = 0;
  const { history, square, turn, toggleHistory, sortTypeHistory, playWithBot, toggleSquare } = props;
  const checkHistory = (i) => {
    if (!playWithBot) {
      return toggleHistory(i);
    }
    console.log('turnbefore-------', turn);
    toggleHistory(i);
    console.log('turnturnafter-------', turn);
    // if (turn)
    // {
    //   toggleHistory(i);
    //     let value = 0;
    //   do {
    //     value = Math.floor(Math.random() * Math.floor(400));
    //   } while (square[value]);
    //   toggleSquare(value, !turn);
    // } else {
    //   toggleHistory(i);
    // }

  };
  for (let i = 0; i < history[0].length; i += 1) {
    toadoX = history[0][i][2] % 20;
    toadoY = parseInt(history[0][i][2] / 20, 10);
    const element = (<li key={i}>
        <button
          className={
            i===history[2] ? 'list-group-item btn-in-li active' : 'list-group-item btn-in-li'
          }
          key={i}
          id={i}
          onClick= {() => checkHistory(i)}
          type="button"
        >
          Lượt {i + 1}: [{toadoY},{toadoX}]
        </button>
      </li>);
    if (sortTypeHistory)
        arr.push(
        element
        );
    else arr.unshift(element)
  }
    return(
        <div className="history">
              <ul className= 'list-group list-group-history'>
               {arr}
              </ul>
        </div>
    )
}

export default History;
