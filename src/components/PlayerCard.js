import React, { Component } from 'react';

import './PlayerCard.css';
import playerPic from '../assets/img/ronaldinho.jpeg';

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <img className="PlayerCard-pic" src={playerPic} alt="Player's pic"></img>
        <p>Player Name</p>
      </div>
    );
  }
}

export default PlayerCard;
