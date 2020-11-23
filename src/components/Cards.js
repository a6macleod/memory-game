import React, { useState } from "react";

const Cards = (props) => {
  const [cardOrder, setCardOrder] = useState([
    {
      index: Math.random() * 100,
      name: "first",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Second",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Third",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Fourth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Fith",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Sixth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Seventh",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Eighth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Ninth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Tenth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Eleventh",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Twelth",
      clicked: false,
    },
  ]);

  function checkIfClicked(item) {
    if (item.clicked) {
      resetClickedCards();
      props.endRound();
    } else {
      item.clicked = true;
      props.addPoint();
    }
    resortCards();
  }

  function resetClickedCards() {
    const resetCards = cardOrder.slice();
    resetCards.forEach((card) => (card.clicked = false));
  }

  function resortCards() {
    const sortedCards = cardOrder.slice();
    sortedCards.forEach((card) => (card.index = Math.random() * 100));
    sortedCards.sort((a, b) => (a.index > b.index ? 1 : -1));
    setCardOrder(sortedCards);
  }

  // resortCards();
  return (
    <div className="Cards">
      <p>random cards go here!</p>
      <div className="button" onClick={props.addPoint}>
        Add a point!
      </div>
      <div className="button" onClick={() => resortCards()}>
        Re-order the list!
      </div>
      <div className="card 0" onClick={() => checkIfClicked(cardOrder[0])}>
        {cardOrder[0].name} {cardOrder[0].clicked ? "true" : "False"}
      </div>
      <div className="card 1" onClick={() => checkIfClicked(cardOrder[1])}>
        {cardOrder[1].name} {cardOrder[1].clicked ? "true" : "False"}
      </div>
      <div className="card 2" onClick={() => checkIfClicked(cardOrder[2])}>
        {cardOrder[2].name} {cardOrder[2].clicked ? "true" : "False"}
      </div>
      <div className="card 3" onClick={() => checkIfClicked(cardOrder[3])}>
        {cardOrder[3].name} {cardOrder[3].clicked ? "true" : "False"}
      </div>
      <div className="card 4" onClick={() => checkIfClicked(cardOrder[4])}>
        {cardOrder[4].name} {cardOrder[4].clicked ? "true" : "False"}
      </div>
      <div className="card 5" onClick={() => checkIfClicked(cardOrder[5])}>
        {cardOrder[5].name} {cardOrder[5].clicked ? "true" : "False"}
      </div>
      <div className="card 6" onClick={() => checkIfClicked(cardOrder[6])}>
        {cardOrder[6].name} {cardOrder[6].clicked ? "true" : "False"}
      </div>
      <div className="card 7" onClick={() => checkIfClicked(cardOrder[7])}>
        {cardOrder[7].name} {cardOrder[7].clicked ? "true" : "False"}
      </div>

      <div className="card 8" onClick={() => checkIfClicked(cardOrder[8])}>
        {cardOrder[8].name} {cardOrder[8].clicked ? "true" : "False"}
      </div>
      <div className="card 9" onClick={() => checkIfClicked(cardOrder[9])}>
        {cardOrder[9].name} {cardOrder[9].clicked ? "true" : "False"}
      </div>
      <div className="card 10" onClick={() => checkIfClicked(cardOrder[10])}>
        {cardOrder[10].name} {cardOrder[10].clicked ? "true" : "False"}
      </div>
      <div className="card 11" onClick={() => checkIfClicked(cardOrder[11])}>
        {cardOrder[11].name} {cardOrder[11].clicked ? "true" : "False"}
      </div>
    </div>
  );
};

export default Cards;
