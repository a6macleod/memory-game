import React from "react";

const Cards = (props) => {
  return (
    <div className="Cards-section">
      <div className="cards-container">
        <div
          className="card 0"
          onClick={() => props.checkIfClicked(props.allCards[0])}
        >
          <img src={props.allCards[0].img} alt="gears" />
        </div>
        <div
          className="card 1"
          onClick={() => props.checkIfClicked(props.allCards[1])}
        >
          <img src={props.allCards[1].img} alt="gears" />
        </div>
        <div
          className="card 2"
          onClick={() => props.checkIfClicked(props.allCards[2])}
        >
          <img src={props.allCards[2].img} alt="gears" />
        </div>
        <div
          className="card 3"
          onClick={() => props.checkIfClicked(props.allCards[3])}
        >
          <img src={props.allCards[3].img} alt="gears" />
        </div>
        <div
          className="card 4"
          onClick={() => props.checkIfClicked(props.allCards[4])}
        >
          <img src={props.allCards[4].img} alt="gears" />
        </div>
        <div
          className="card 5"
          onClick={() => props.checkIfClicked(props.allCards[5])}
        >
          <img src={props.allCards[5].img} alt="gears" />
        </div>
        <div
          className="card 6"
          onClick={() => props.checkIfClicked(props.allCards[6])}
        >
          <img src={props.allCards[6].img} alt="gears" />
        </div>
        <div
          className="card 7"
          onClick={() => props.checkIfClicked(props.allCards[7])}
        >
          <img src={props.allCards[7].img} alt="gears" />
        </div>
        <div
          className="card 8"
          onClick={() => props.checkIfClicked(props.allCards[8])}
        >
          <img src={props.allCards[8].img} alt="gears" />
        </div>

        <div
          className="card 9"
          onClick={() => props.checkIfClicked(props.allCards[9])}
        >
          <img src={props.allCards[9].img} alt="gears" />
        </div>
        <div
          className="card 10"
          onClick={() => props.checkIfClicked(props.allCards[10])}
        >
          <img src={props.allCards[10].img} alt="gears" />
        </div>
        <div
          className="card 11"
          onClick={() => props.checkIfClicked(props.allCards[11])}
        >
          <img src={props.allCards[11].img} alt="gears" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
