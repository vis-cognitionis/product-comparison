import React from "react";
import "../product-card/card.scss";

export default function ProductCard({
  productType,
  productName,
  productPrice,
}) {
  return (
    <div className="cardContainer">
      <img className="productImage" src="./logo512.png" alt=""></img>
      <div className="productInfosContainer">
        <p className="productType"> {productType}</p>
        <div className="productInfos">
          <p className="productName"> {productName}</p>
          <p className="productPrice"> {productPrice}$</p>
        </div>
      </div>
      <button className="productButton">
        <p className="buttonName"> COMPARE</p>
      </button>
    </div>
  );
}
