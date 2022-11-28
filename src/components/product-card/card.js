import React from "react";
import "../product-card/card.scss";

export default function ProductCard({
  productImage,
  productType,
  productName,
  productPrice,
  selectedProduct,
  productId,
  onClick,
}) {
  return (
    <div className="cardContainer">
      <img className="productImage" src={productImage} alt=""></img>
      <div className="productInfosContainer">
        <p className="productType"> {productType}</p>
        <div className="productInfos">
          <p className="productName"> {productName}</p>
          <p className="productPrice"> {productPrice}$</p>
        </div>
      </div>
      <button
        className="productButton"
        style={{
          background: productId === selectedProduct && "rgba(91, 49, 50, 0.7)",
        }}
        onClick={onClick}
      >
        <p className="buttonName"> COMPARE</p>
      </button>
    </div>
  );
}
