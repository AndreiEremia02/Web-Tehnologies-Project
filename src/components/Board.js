import React from 'react';
import './Board.css';

function Board() {
  return (
    <div className="board">
      <div className="column" id="open-column">
        <h2 className="column-title">OPEN</h2>
        <div className="task-list" id="open-list"></div>
      </div>

      <div className="column" id="pending-column">
        <h2 className="column-title">PENDING</h2>
        <div className="task-list" id="pending-list"></div>
      </div>

      <div className="column" id="completed-column">
        <h2 className="column-title">COMPLETED</h2>
        <div className="task-list" id="completed-list"></div>
      </div>

      <div className="column" id="closed-column">
        <h2 className="column-title">CLOSED</h2>
        <div className="task-list" id="closed-list"></div>
      </div>
    </div>
  );
}

export default Board;
