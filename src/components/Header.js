import React from "react";

const Header = ({ score, toggleDirections }) => {
  return (
    <div className="header">
      <h1>Memory!</h1>
      <div className="score-container">
        <h4>
          Score: <span>{score.currentScore}</span>
        </h4>
        <h4>
          Best Score: <span>{score.bestScore}</span>
        </h4>
        <button
          className="directions-button"
          onClick={() => toggleDirections()}
        >
          Directions
        </button>
      </div>
    </div>
  );
};

export default Header;
