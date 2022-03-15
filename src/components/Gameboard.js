import React from "react";

const Gameboard = ({ allCards, checkIfClicked }) => {
  return (
    <div className="Cards-section">
      <div className="cards-container">
        {allCards.map((card) =>
          <div
            className="card"
            key={card.index}
            onClick={() => checkIfClicked(card)}
          >
            <img src={card.img} alt="gears" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gameboard;
