import React from "react";

const Cards = (props) => {
  return (
    <div className="Cards">
      <p>random cards go here!</p>
      <div className="button" onClick={props.addPoint}>
        Add a point!
      </div>
      <div className="button" onClick={() => props.resortCards()}>
        Re-order the list!
      </div>
      <div
        className="card 0"
        onClick={() => props.checkIfClicked(props.cardOrder[0])}
      >
        {props.cardOrder[0].name}{" "}
        {props.cardOrder[0].clicked ? "true" : "False"}
        <img src={props.cardOrder[0].img} alt="gears" />
      </div>
      <div
        className="card 1"
        onClick={() => props.checkIfClicked(props.cardOrder[1])}
      >
        {props.cardOrder[1].name}{" "}
        {props.cardOrder[1].clicked ? "true" : "False"}
        <img src={props.cardOrder[1].img} alt="gears" />
      </div>
      <div
        className="card 2"
        onClick={() => props.checkIfClicked(props.cardOrder[2])}
      >
        {props.cardOrder[2].name}{" "}
        {props.cardOrder[2].clicked ? "true" : "False"}
        <img src={props.cardOrder[2].img} alt="gears" />
      </div>
      <div
        className="card 3"
        onClick={() => props.checkIfClicked(props.cardOrder[3])}
      >
        {props.cardOrder[3].name}{" "}
        {props.cardOrder[3].clicked ? "true" : "False"}
        <img src={props.cardOrder[3].img} alt="gears" />
      </div>
      <div
        className="card 4"
        onClick={() => props.checkIfClicked(props.cardOrder[4])}
      >
        {props.cardOrder[4].name}{" "}
        {props.cardOrder[4].clicked ? "true" : "False"}
        <img src={props.cardOrder[4].img} alt="gears" />
      </div>
      <div
        className="card 5"
        onClick={() => props.checkIfClicked(props.cardOrder[5])}
      >
        {props.cardOrder[5].name}{" "}
        {props.cardOrder[5].clicked ? "true" : "False"}
        <img src={props.cardOrder[5].img} alt="gears" />
      </div>
      <div
        className="card 6"
        onClick={() => props.checkIfClicked(props.cardOrder[6])}
      >
        {props.cardOrder[6].name}{" "}
        {props.cardOrder[6].clicked ? "true" : "False"}
        <img src={props.cardOrder[6].img} alt="gears" />
      </div>
      <div
        className="card 7"
        onClick={() => props.checkIfClicked(props.cardOrder[7])}
      >
        {props.cardOrder[7].name}{" "}
        {props.cardOrder[7].clicked ? "true" : "False"}
        <img src={props.cardOrder[7].img} alt="gears" />
      </div>

      <div
        className="card 8"
        onClick={() => props.checkIfClicked(props.cardOrder[8])}
      >
        {props.cardOrder[8].name}{" "}
        {props.cardOrder[8].clicked ? "true" : "False"}
        <img src={props.cardOrder[8].img} alt="gears" />
      </div>
      <div
        className="card 9"
        onClick={() => props.checkIfClicked(props.cardOrder[9])}
      >
        {props.cardOrder[9].name}{" "}
        {props.cardOrder[9].clicked ? "true" : "False"}
        <img src={props.cardOrder[9].img} alt="gears" />
      </div>
      <div
        className="card 10"
        onClick={() => props.checkIfClicked(props.cardOrder[10])}
      >
        {props.cardOrder[10].name}{" "}
        {props.cardOrder[10].clicked ? "true" : "False"}
        <img src={props.cardOrder[10].img} alt="gears" />
      </div>
      <div
        className="card 11"
        onClick={() => props.checkIfClicked(props.cardOrder[11])}
      >
        {props.cardOrder[11].name}{" "}
        {props.cardOrder[11].clicked ? "true" : "False"}
        <img src={props.cardOrder[11].img} alt="gears" />
      </div>
    </div>
  );
};

export default Cards;
