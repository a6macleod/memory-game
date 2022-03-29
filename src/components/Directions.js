import React from "react";

const Directions = ({ toggleDirections }) => {
  return (
    <div className="directions-container">
      <h2>Directions</h2>
      <div className="directions">
        <p>
          Click the images to score a point! Click all 12 images only once and win!
        </p>
        <p>
          Try not to click the same image twice or your score will reset!
        </p>
        <button className="ok-button directions-button" onClick={() => toggleDirections()}>
          OK!
        </button>
      </div>
    </div>
  );
};

export default Directions;
