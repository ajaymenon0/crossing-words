import React from 'react';

const Clues = ({ clues }) => (
  <div className="clues">
    <div className="clues-across">
      <h3>Across</h3>
      {
        clues.across.map((clue) => <div>{clue}</div>)
      }
    </div>
    <div className="clues-down">
      <h3>Down</h3>
      {
        clues.down.map((clue) => <div>{clue}</div>)
      }
    </div>
  </div>
);

export default Clues;