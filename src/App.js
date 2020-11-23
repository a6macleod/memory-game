import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const [cardOrder, setCardOrder] = useState([
    {
      index: Math.random() * 100,
      name: "first",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Second",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Third",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Fourth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Fith",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Sixth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Seventh",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Eighth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Ninth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Tenth",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Eleventh",
      clicked: false,
    },
    {
      index: Math.random() * 100,
      name: "Twelth",
      clicked: false,
    },
  ]);

  // card functions
  function checkIfClicked(item) {
    if (item.clicked) {
      resetClickedCards();
      endRound();
    } else {
      item.clicked = true;
      addPoint();
    }
    resortCards();
  }

  function resetClickedCards() {
    const resetCards = cardOrder.slice();
    resetCards.forEach((card) => (card.clicked = false));
  }

  function resortCards() {
    const sortedCards = cardOrder.slice();
    sortedCards.forEach((card) => (card.index = Math.random() * 100));
    sortedCards.sort((a, b) => (a.index > b.index ? 1 : -1));
    setCardOrder(sortedCards);
  }

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
      <Header score={score} />
      <Cards
        addPoint={addPoint}
        endRound={endRound}
        cardOrder={cardOrder}
        checkIfClicked={checkIfClicked}
        resortCards={resortCards}
      />
      <Footer />
    </div>
  );
}

export default App;
