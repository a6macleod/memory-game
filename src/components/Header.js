import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Memory!</h1>
      <div className="score-container">
        <h4>Score: {props.score.currentScore}</h4>
        <h4>Best Score: {props.score.bestScore}</h4>
        <a href="#" className="directions">
          Directions
        </a>
      </div>
    </div>
  );
};

export default Header;
