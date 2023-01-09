import React from "react";
import "../product-card/card.scss";

export default function ProductCard({
  productImage,
  productType,
  productName,
  productPrice,
  selectedProducts,
  productId,
  onClick,
}) {
  const rule = selectedProducts.some((item) => item.id === productId);

  return (
    <div
      className="cardContainer"
      style={{ boxShadow: rule && "0px 0px 24px rgba(0, 0, 0, 0.5)" }}
    >
      <img className="productImage" src={productImage} alt="" />
      <div className="productInfosContainer">
        <p className="productType"> {productType}</p>
        <div className="productInfos">
          <p className="productName">
            {productName.length > 20
              ? productName.slice(0, 25) + "..."
              : productName}
          </p>
          <p className="productPrice"> {productPrice}$</p>
        </div>
      </div>
      <button
        className="productButton"
        style={{
          background: rule && "rgba(91, 49, 50, 0.7)",
        }}
        onClick={onClick}
      >
        <p className="buttonName"> {rule ? "REMOVE" : "COMPARE"}</p>
      </button>
    </div>
  );
}
