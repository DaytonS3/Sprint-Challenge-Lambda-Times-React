import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => (
            <Card card={card} key={card.headline} />
          ))}
    </div>
  )
}



// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.string)
}

export default Cards;