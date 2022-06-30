import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

// Component Hierarchy:
// └── src
//     ├── __tests__
//     │   ├── App.test.js
//     │   ├── Item.test.js
//     │   └── ShoppingList.test.js
//     ├── components
//     │   ├── App.js
//     │   ├── Item.js
//     │   └── ShoppingList.js
//     ├── data
//     │   └── items.js
//     ├── index.css
//     └── index.js

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isLight, setLightMode] = useState(false);

  function changeLightMode() {
    setLightMode((isLight) => !isLight);
  }

  // const appClass = false ? "App dark" : "App light";
  const appClass = isLight ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeLightMode}>
          {isLight ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
