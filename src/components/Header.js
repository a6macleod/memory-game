import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Memory!</h1>
      <div className="score-container">
        <h4>Score: {props.score.currentScore}</h4>
        <h4>Highest Score: {props.score.bestScore}</h4>
      </div>
    </div>
  );
};

export default Header;
