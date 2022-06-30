import React, { useState } from "react";
import Item from "./Item";

// Array Cheat Sheet:
// Add: use the spread operator ([...])
// Remove: use .filter
// Update: use .map

function ShoppingList({ items }) {
  const [selectedCategory, changeCategory] = useState(false);

  function selectEventHandler(event) {
    console.log("event:");
    console.log(event);

    // const selectValue = event.target.value;

    changeCategory(event.target.value);
  }

  const filteredList = items.filter(
    (item) => item.category === selectedCategory
  );

  console.log("filteredList: ");
  console.log(filteredList);

  console.log("items:");
  console.log(items);

  // Use 'callback notation' to utilize 'setter' function to set the state accordingly:
  // changeCategory(() => selectedCategory: filteredList);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectEventHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory
          ? filteredList.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : items.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}
//         {cartStatus ? "Remove From Cart" : "Add to Cart"}

// Previous 'items.map()' section inside JSX return statement:
//         {items.map((item) => (
//             <Item key={item.id} name={item.name} category={item.category} />
//         ))
// }

export default ShoppingList;
