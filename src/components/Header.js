import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Memory!</h1>
      <div className="score-container">
        <h4>
          Score: <span>{props.score.currentScore}</span>
        </h4>
        <h4>
          Best Score: <span>{props.score.bestScore}</span>
        </h4>
        <button
          className="directions-button"
          onClick={() => props.toggleDirections()}
        >
          Directions
        </button>
      </div>
    </div>
  );
};

export default Header;
