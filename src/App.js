import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import Score from './Score/Score';
import GameOver from './GameOver/GameOver';

function getRndInteger (min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {

  state = {
    current: 0,
    score: 0,
    showGameOver: false,
  };

  pace = 1500;


startNext = () => {
  let nextActive = undefined;
  do {
    nextActive = getRndInteger(1, 4);
  } while (nextActive === this.state.current);
  this.setState({
    current:nextActive
  });

  setTimeout(this.startNext.bind(this), this.pace);
}

startGameHandler = () => {
  this.startNext();
}

 clickHandler = (btnId) => {
   console.log('clicked', btnId);
 }

 gameOverHandler = () => {
   this.setState({
     showGameOver:true
   });
 }


  render() {
    return (
      <div className="App">
        <h1>Speedgame</h1>
        <Score />
      <div>
        <Circle active={this.state.current === 1} click={() => this.clickHandler(1)} />
        <Circle active={this.state.current === 2} click={() => this.clickHandler(2)} />
        <Circle active={this.state.current === 3} click={() => this.clickHandler(3)} />
        <Circle active={this.state.current === 4} click={() => this.clickHandler(4)} />
      </div>
        {this.state.showGameOver && <GameOver />}
      <div>
        <button onClick={this.startGameHandler}>Start game</button>
        <button onClick={this.gameOverHandler}>Stop game</button>
      </div>

      </div>
    );
  }
}

export default App;
