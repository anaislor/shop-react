import React, { useState } from "react";
import "./App.css";
import Shop from "./components/Shop";
import Basket from "./components/Basket";
import { Switch, NavLink, Route } from "react-router-dom";

function App() {
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setBasket([...basket, product]);
  }

  function removeFromBasket(product) {
    setBasket([...basket].filter(p => p !== product));
  }

  return (
    <div className="container mt-5">
      <nav id="mainNav">
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/basket">Basket</NavLink>
        <span>{basket.length}</span>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Shop
            addToBasket={addToBasket}
            basket={basket}
            remove={removeFromBasket}
          />
        </Route>
        <Route path="/basket">
          <Basket
            basket={basket}
            addToBasket={addToBasket}
            remove={removeFromBasket}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
