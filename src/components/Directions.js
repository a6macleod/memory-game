import React from "react";

const Directions = ({ toggleDirections }) => {
  return (
    <div className="directions-container">
      <h2>Directions</h2>
      <div className="directions">
        <p>
          Click the images to score a point. Try not to click the same one twice
          or your score will reset! Click all 12 images in one go and win!
        </p>
        <button className="ok-button" onClick={() => toggleDirections()}>
          Play
        </button>
      </div>
    </div>
  );
};

export default Directions;
