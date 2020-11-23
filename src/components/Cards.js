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
    if (item.clicked === false) {
      item.clicked = true;
      props.addPoint();
    }
    resortCards();
    // console.log(cardOrder);
  }

  function resortCards() {
    const sortedCards = cardOrder.slice();
    sortedCards.forEach((card) => (card.index = Math.random() * 100));
    sortedCards.sort((a, b) => (a.index > b.index ? 1 : -1));
    console.log(sortedCards);
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
        {cardOrder[0].name}
      </div>
      <div className="card 1">{cardOrder[1].name}</div>
      <div className="card 2">{cardOrder[2].name}</div>
      <div className="card 3">{cardOrder[3].name}</div>

      <div className="card 4">{cardOrder[4].name}</div>
      <div className="card 5">{cardOrder[5].name}</div>
      <div className="card 6">{cardOrder[6].name}</div>
      <div className="card 7">{cardOrder[7].name}</div>

      <div className="card 8">{cardOrder[8].name}</div>
      <div className="card 9">{cardOrder[9].name}</div>
      <div className="card 10">{cardOrder[10].name}</div>
      <div className="card 11">{cardOrder[11].name}</div>
    </div>
  );
};

export default Cards;
