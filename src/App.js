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

  const endRound = () => {
    console.log("round ended!");
    setScore({
      ...score,
      currentScore: 0,
    });
  };

  const addPoint = () => {
    const updatedScore = score.currentScore + 1;
    if (updatedScore > score.bestScore) {
      addCurrentAndBestScore(updatedScore);
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
      <Cards addPoint={addPoint} endRound={endRound} />
      <Footer />
    </div>
  );
}

export default App;
