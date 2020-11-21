import React, { useState } from "react";

const Header = () => {
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });
  return (
    <div className="header">
      <h1>Memory!</h1>
    </div>
  );
};

export default Header;
