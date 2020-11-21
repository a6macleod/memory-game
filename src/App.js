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

  const addPoint = () => {
    setScore(score.currentScore + 1);
  };
  return (
    <div className="App">
      <Header score={score} />
      <Cards addPoint={addPoint} />
      <Footer />
    </div>
  );
}

export default App;
