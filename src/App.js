import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Directions from "./components/Directions";
// images
import imgZero from "./images/imgZero.jpg";
import imgOne from "./images/imgOne.jpg";
import imgTwo from "./images/imgTwo.jpg";
import imgThree from "./images/imgThree.jpg";
import imgFour from "./images/imgFour.jpg";
import imgFive from "./images/imgFive.jpg";
import imgSix from "./images/imgSix.jpg";
import imgSeven from "./images/imgSeven.jpg";
import imgEight from "./images/imgEight.jpg";
import imgNine from "./images/imgNine.jpg";
import imgTen from "./images/imgTen.jpg";
import imgEleven from "./images/imgEleven.jpg";

function App() {
  const [showDirections, setShowDirections] = useState({
    show: false,
  });

  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const [cardOrder, setCardOrder] = useState([
    {
      index: Math.random() * 100,
      name: "zero",
      clicked: false,
      img: imgZero,
    },
    {
      index: Math.random() * 100,
      name: "one",
      clicked: false,
      img: imgOne,
    },
    {
      index: Math.random() * 100,
      name: "two",
      clicked: false,
      img: imgTwo,
    },
    {
      index: Math.random() * 100,
      name: "three",
      clicked: false,
      img: imgThree,
    },
    {
      index: Math.random() * 100,
      name: "four",
      clicked: false,
      img: imgFour,
    },
    {
      index: Math.random() * 100,
      name: "five",
      clicked: false,
      img: imgFive,
    },
    {
      index: Math.random() * 100,
      name: "six",
      clicked: false,
      img: imgSix,
    },
    {
      index: Math.random() * 100,
      name: "seven",
      clicked: false,
      img: imgSeven,
    },
    {
      index: Math.random() * 100,
      name: "eight",
      clicked: false,
      img: imgEight,
    },
    {
      index: Math.random() * 100,
      name: "nine",
      clicked: false,
      img: imgNine,
    },
    {
      index: Math.random() * 100,
      name: "ten",
      clicked: false,
      img: imgTen,
    },
    {
      index: Math.random() * 100,
      name: "eleven",
      clicked: false,
      img: imgEleven,
    },
  ]);

  // Shuffles the cards 1x on load
  useEffect(() => {
    resortCards();
  }, []);

  // pop up for directions and best score
  const toggleDirections = () => {
    setShowDirections({
      show: !showDirections.show,
    });
  };

  // card functions
  const checkIfClicked = (item) => {
    if (item.clicked) {
      resetClickedCards();
      endRound();
    } else {
      item.clicked = true;
      addPoint();
    }
    resortCards();
  };

  const resetClickedCards = () => {
    const resetCards = cardOrder.slice();
    resetCards.forEach((card) => (card.clicked = false));
  };

  const resortCards = () => {
    const sortedCards = cardOrder.slice();
    sortedCards.forEach((card) => (card.index = Math.random() * 100));
    sortedCards.sort((a, b) => (a.index > b.index ? 1 : -1));
    setCardOrder(sortedCards);
  };

  // score keeping functions
  const endRound = () => {
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  const endGame = () => {
    resetClickedCards();
    setScore({
      bestScore: 0,
      currentScore: 0,
    });
  };

  const addPoint = () => {
    const updatedScore = score.currentScore + 1;
    if (updatedScore > score.bestScore) {
      addCurrentAndBestScore(updatedScore);
      if (updatedScore === 12) {
        alert("You win!");
        endGame();
      }
    } else {
      addCurrentScore(updatedScore);
    }
  };

  const addCurrentScore = (updatedScore) => {
    setScore({
      ...score,
      currentScore: updatedScore,
    });
  };

  const addCurrentAndBestScore = (updatedScore) => {
    setScore({
      ...score,
      currentScore: updatedScore,
      bestScore: updatedScore,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Header score={score} toggleDirections={toggleDirections} />
        {showDirections.show ? (
          <Directions toggleDirections={toggleDirections} />
        ) : (
          <Cards
            addPoint={addPoint}
            endRound={endRound}
            cardOrder={cardOrder}
            checkIfClicked={checkIfClicked}
            resortCards={resortCards}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
