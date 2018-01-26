import React, { Component } from 'react';
import './App.css';

import PlayerCard from './PlayerCard.js';
import SortButton from './SortButton.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      winners: [null, null]
    };
  }

  sortPlayer() {
    const loser = Math.floor(Math.random() * 3);
    this.setState({
      winners: [0, 1, 2].filter(x => ![loser].includes(x))
    });
  }

  isWinner(player) {
    return this.state.winners.includes(player);
  }

  handleClick() {
    this.sortPlayer();
  }

  renderPlayerCard(playerName, winner) {
    return (
      <PlayerCard playerName={playerName} winner={winner}/>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FIFITA</h1>
        </header>

        <div className="App-players">
          {this.renderPlayerCard('Adriel', this.isWinner(0))}
          {this.renderPlayerCard('Icaro', this.isWinner(1))}
          {this.renderPlayerCard('Phil', this.isWinner(2))}
        </div>

        <SortButton onClick={() => this.handleClick()}/>
      </div>
    );
  }
}

export default App;
