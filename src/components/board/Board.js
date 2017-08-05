import React, { Component } from 'react';
import './Board.css';
import Card from '../card/Card';

const tools = [
  { name: 'Bower', logo: require('../../assets/bower.png') },
  { name: 'CSS', logo: require('../../assets/css.png') },
  { name: 'Grunt', logo: require('../../assets/grunt.png') },
  { name: 'Gulp', logo: require('../../assets/gulp.png') },
  { name: 'HTML', logo: require('../../assets/html.png') },
  { name: 'Javascript', logo: require('../../assets/javascript.png') },
  { name: 'Sass', logo: require('../../assets/sass.svg') },
  { name: 'Bootstrap', logo: require('../../assets/bootstrap.svg') }
];

export default class Board extends Component {

  static SIZE = 4;

  componentWillMount() {
    this.shuffle_();
  }

  onCardClick(card, x, y) {
    let cardsMatrix = [];

    for (let i = 0; i < Board.SIZE; i++) {
      cardsMatrix.push([...this.state.cardsMatrix[i]]);
    }

    cardsMatrix[y][x].flipped ^= true;

    this.setState({ cardsMatrix });
  }

  randomCardPos_() {
    return {
      x: Math.floor(Math.random() * Board.SIZE),
      y: Math.floor(Math.random() * Board.SIZE)
    }
  }

  swap_(m, p1, p2) {
    [m[p1.x][p1.y], m[p2.x][p2.y]] = [m[p2.x][p2.y], m[p1.x][p1.y]];
  }

  shuffle_() {
    let cardsMatrix = [];

    for (let i = 0, ct = 0; i < Board.SIZE; i++) {
      let row = [];
      for (let j = 0; j < Board.SIZE; j += 2) {
        row.push({...tools[ct], flipped: true });
        row.push({...tools[ct], flipped: true });
        ct++;
      }
      cardsMatrix.push(row);
    }

    for (let i = 0; i < Board.SIZE * 2; i++) {
      this.swap_(cardsMatrix, this.randomCardPos_(), this.randomCardPos_());
    }

    this.setState({ cardsMatrix });
  }
  
  render() {
    return (
      <div className="board">
        {this.state.cardsMatrix.map((cardsRow, rowIdx) =>
          <div className="row" key={`row-${rowIdx}`}>
            {cardsRow.map((card, cardIdx) =>
              <Card 
                key={`card-${cardIdx}`} 
                name={card.name} 
                image={card.logo} 
                flipped={card.flipped} 
                onClick={e => this.onCardClick(card, cardIdx, rowIdx)} 
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
