import React, { Component } from 'react';
import './App.css';

import PlayerCard from './PlayerCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FIFITA</h1>
        </header>

        <div className="App-players">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    );
  }
}

export default App;
