import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gameboard from "./components/Gameboard";
import Directions from "./components/Directions";

import cardHandlers from "./utils/cardHandlers";

function App() {
  const [showDirections, setShowDirections] = useState({
    show: false,
  });

  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const [allCards, setAllCards] = useState(cardHandlers.cardBuilder);

  // Shuffle the cards on page load
  useEffect(() => {
    setAllCards(cardHandlers.shuffleCards(allCards));
  }, [allCards]);

  function checkIfClicked(card) {
    if (!card.clicked) {
      clickCard(card);
    } else {
      cardWasAlreadyClicked();
    }
    setAllCards(cardHandlers.shuffleCards(allCards));
  };

  function clickCard(card) {
    markCardAsClicked(card);
    addPoint();
  }

  function markCardAsClicked(card) {
    setAllCards(...allCards, card.clicked = true);
  }

  function cardWasAlreadyClicked() {
    setAllCards(cardHandlers.resetClickedCards(allCards));
    endRound();
  }

  function addPoint() {
    const newScore = score.currentScore + 1;
    updateScore(newScore);
    checkIfGameOver(newScore);
  };

  function updateScore(newScore) {
    setScore({
      ...score,
      currentScore: newScore,
      bestScore: score.bestScore < newScore ? newScore : score.bestScore,
    });
  };

  function endRound() {
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  function checkIfGameOver(newScore) {
    if (newScore >= 12) {
      alert("You win!");
      resetGame();
    }
  };

  function resetGame() {
    setScore({
      bestScore: 0,
      currentScore: 0,
    });
  };

  function toggleDirections() {
    setShowDirections({
      show: !showDirections.show,
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
            allCards={allCards}
            checkIfClicked={checkIfClicked}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
