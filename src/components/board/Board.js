import React, { Component } from 'react';
import './Board.css';
import Card from '../card/Card';
import jsLogo from '../../assets/javascript.png';

const range = (size, content) => Array(size).fill(content);

export default class Board extends Component {

  constructor(props) {
    super(props);
    let cardsMatrix = range(4).map(row => 
      range(4, {
        logo: jsLogo,
        name: 'Javascript'
      })
    );
    this.state = { cardsMatrix };
  }

  render() {
    return (
      <div className="board">
        {this.state.cardsMatrix.map((cardsRow, rowIdx) =>
          <div className="row" key={`row-${rowIdx}`}>
            {cardsRow.map((card, cardIdx) =>
              <Card image={card.logo} name={card.name} key={`card-${cardIdx}`} />
            )}
          </div>
        )}
      </div>
    );
  }
}
