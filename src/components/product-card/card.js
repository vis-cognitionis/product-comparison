import React from "react";
import "../product-card/card.scss";

export default function ProductCard() {
  return (
    <div className="cardContainer">
      <img className="productImage" src="./logo512.png" alt=""></img>
      <div className="productInfosContainer">
        <p className="productType"> jewelery</p>
        <div className="productInfos">
          <p className="productName"> White Gold Plated Princess</p>
          <p className="productPrice"> 9.99$</p>
        </div>
      </div>
      <button className="productButton">
        <p className="buttonName"> COMPARE</p>
      </button>
    </div>
  );
}
