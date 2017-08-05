import React, { Component } from 'react';
import './Board.css';
import Card from '../card/Card';

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <div>
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
