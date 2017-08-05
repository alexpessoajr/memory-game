import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className={props.flipped ? 'card flipped' : 'card'} onClick={e => props.onClick()}>
    <div className="container">
      <div className="front">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="back"></div>
    </div>
  </div>
);

export default Card;