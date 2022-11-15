import React from "react";
import useAxios from "axios-hooks";

import ProductCard from "../product-card/card";
import useWindowSize from "../../custom-hooks/useWindowSize";
import "../pages/comparison_page.scss";

export default function ComparisonPage() {
  const size = useWindowSize();

  const [{ data, loading, error }, refetch] = useAxios(
    "https://fakestoreapi.com/products"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);
  return (
    <div className="pageContainer">
      <div
        className="cardsContainer"
        style={{ width: `calc(${size.width}px - 180px)` }}
      >
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              productType={item.category}
              productName={item.title}
              productPrice={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
