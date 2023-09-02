import React, { useState } from "react";
import "./Cards.css";
const Cards = ({ image, Name, Quantity }) => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <div className="card">
      <div className="card-head">
        <img src={image} />
      </div>
      <div className="card-body">
        <h3>{Name}</h3>
        <p>Quantity: {Quantity}</p>
        <div className="counter-buttons">
          <button onClick={handleClick2}>-</button>
          <div className="counter">{counter}</div>
          <button onClick={handleClick1}>+</button>
        </div>
        <button className="card-body-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
