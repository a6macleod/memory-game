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

  const [allCards, setAllCards] = useState(cardHandlers.cardBuilder);

  // Shuffle the cards 1x on load
  useEffect(() => {
    console.log('useEffect called');
    setAllCards(cardHandlers.shuffleCards(allCards));
  }, [allCards]);

  // card functions
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

  // score keeping
  const addPoint = () => {
    const newScore = score.currentScore + 1;
    checkIfNewBestScore(newScore);
    checkIfGameOver(newScore);
  };

  const checkIfNewBestScore = (newScore) => {
    if (newScore > score.bestScore) {
      updateCurrentAndBestScore(newScore);
    } else {
      updateCurrentScore(newScore);
    }
  };

  const updateCurrentAndBestScore = (newScore) => {
    setScore({
      ...score,
      currentScore: newScore,
      bestScore: newScore,
    });
  };

  const updateCurrentScore = (newScore) => {
    setScore({
      ...score,
      currentScore: newScore,
    });
  };

  const endRound = () => {
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  const checkIfGameOver = (newScore) => {
    if (newScore >= 12) {
      alert("You win!");
      resetGame();
    }
  };

  const resetGame = () => {
    setScore({
      bestScore: 0,
      currentScore: 0,
    });
  };

    // directions pop up
    const toggleDirections = () => {
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
