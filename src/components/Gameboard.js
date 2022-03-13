import React from "react";

const Cards = ({ allCards, checkIfClicked }) => {
  return (
    <div className="Cards-section">
      <div className="cards-container">
        {allCards.map((card) =>
          <div
            className="card"
            onClick={() => checkIfClicked(card)}
          >
            <img src={card.img} alt="gears" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
