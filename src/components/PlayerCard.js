import React from 'react';

import './PlayerCard.css';
import playerPic from '../assets/img/ronaldinho.jpeg';

function PlayerCard({ playerName, winner }) {
  const winnerClass = winner === true ? 'winner' : '';

  return (
    <div className={`PlayerCard ${winnerClass}`}>
      <img className="PlayerCard-pic" src={playerPic} alt="Player's pic"></img>
      <p>{playerName}</p>
    </div>
  );
}

export default PlayerCard;
