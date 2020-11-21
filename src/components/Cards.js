import React from "react";

const Cards = (props) => {
  return (
    <div className="Cards">
      <p>random cards go here!</p>
      <div className="button" onClick={props.addPoint}>
        Add a point!
      </div>
    </div>
  );
};

export default Cards;
