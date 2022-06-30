import React, { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false);

  function addedToCart() {
    console.log("addedToCart() function called");

    // setCartStatus((cartStatus) => !cartStatus);

    // When the button is clicked, set the 'cartStatus' to 'in-cart':
    console.log("setCartStatus() function called with callback syntax: ");
    setCartStatus(() => (!cartStatus ? "in-cart" : ""));
    // const temp = setCartStatus()
    // change 'cartStatus' to 'in-cart':
  }

  return (
    <li className={cartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addedToCart} className="add">
        {cartStatus ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
