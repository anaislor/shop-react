import React from "react";
import Pictures from "./Pictures";

function Basket(props) {
  let basket = props.basket;
  return (
    <div>
      <h1>My Basket</h1>
      {!basket ? (
        ""
      ) : (
        <div>
          {basket.map(product => (
            <Pictures
              key={product.id}
              url={product.thumbnailUrl}
              title={product.title}
              onClick={() => props.onClick(product)}
              remove={() => props.remove(product)}
              minus={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Basket;
