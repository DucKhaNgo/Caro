import React from "react";
import Board from "./Board";
import Toolbar from "./Toolbar"

const Game = props => {
  const {isPlaying} = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div id={isPlaying ? '' : 'disabledbutton'} className="col-md-8 board-area">
          <Board props={props}/>
        </div>
        <Toolbar props={props}/>
      </div>
    </div>
  );
};

export default Game;
