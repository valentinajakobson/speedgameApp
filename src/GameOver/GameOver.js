import React, { Component } from 'react';
import './GameOver.css';


class GameOver extends Component {

  closeHandler = () => {
    window.location.reload();
  }


  render() {
    return (

      <div id="result">
        <div className="popup">
          <h2 id="gameover">GAME OVER</h2>
          <p>Last score <span id="finalscore">0</span></p>
          <button onClick={this.closeHandler}>Close</button>
        </div>
      </div>

    );
  }
}

export default GameOver;
