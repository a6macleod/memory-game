import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gameboard from "./components/Gameboard";
import Directions from "./components/Directions";
// card handlers
import cardHandlers from "./utils/cardHandlers";

function App() {
  const [showDirections, setShowDirections] = useState({
    show: false,
  });

  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const [cardOrder, setCardOrder] = useState(cardHandlers.cardBuilder);

  // card functions
  function checkIfClicked(card) {
    if (!card.clicked) {
      clickCard(card);
    } else {
      cardWasAlreadyClicked();
    }
    setCardOrder(cardHandlers.shuffleCards(cardOrder));
  };

  function clickCard(card) {
    markCardAsClicked(card);
    addPoint();
  }

  function cardWasAlreadyClicked() {
    setCardOrder(cardHandlers.resetClickedCards(cardOrder));
    endRound();
  }

  function markCardAsClicked(card) {
    setCardOrder(...cardOrder, card.clicked = true);
  }

   // card functions
  //  const checkIfClicked = (item) => {
  //   if (item.clicked) {
  //     setCardOrder(resetClickedCards(cardOrder));
  //     endRound();
  //   } else {
  //     item.clicked = true;
  //     addPoint();
  //   }
  //   setCardOrder(cardShuffler(cardOrder));
  // };

  // Shuffles the cards 1x on load and after cards stat is updated.
  useEffect(() => {
    setCardOrder(cardHandlers.shuffleCards(cardOrder));
  }, [cardOrder]);

  // pop up for directions and best score
  const toggleDirections = () => {
    setShowDirections({
      show: !showDirections.show,
    });
  };

  // score keeping functions
  const endRound = () => {
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  const endGame = () => {
    setCardOrder(cardHandlers.resetClickedCards(cardOrder));
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
          <Gameboard
            addPoint={addPoint}
            endRound={endRound}
            cardOrder={cardOrder}
            checkIfClicked={checkIfClicked}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
