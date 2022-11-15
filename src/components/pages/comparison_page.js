import React from "react";
import ProductCard from "../product-card/card";
import "../pages/comparison_page.scss";
import useWindowSize from "../../custom-hooks/useWindowSize";

export default function ComparisonPage() {
  const size = useWindowSize();

  return (
    <div className="pageContainer">
      <div
        className="cardsContainer"
        style={{ width: `calc(${size.width}px - 180px)` }}
      >
        {Array(10).fill(<ProductCard />)}
      </div>
    </div>
  );
}
