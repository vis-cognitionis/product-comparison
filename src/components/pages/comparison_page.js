import React, { useState } from "react";
import useAxios from "axios-hooks";

import ProductCard from "../product-card/card";
import useWindowSize from "../../custom-hooks/useWindowSize";
import "../pages/comparison_page.scss";
import Loader from "./loading";

export default function ComparisonPage() {
  const size = useWindowSize();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts);

  const [{ data, loading, error }, refetch] = useAxios(
    "https://fakestoreapi.com/products"
  );
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Loader />
      </div>
    );
  if (error) return <p>Error!</p>;

  // console.log(data);

  const arrayHandler = (item) => {
    const hasParentId = selectedProducts.find(
      (object) => item.id === object.id
    );
    if (!hasParentId) {
      setSelectedProducts((prev) => [...prev, item]);
    }
  };

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
              productId={item.id}
              productImage={item.image}
              productType={item.category}
              productName={item.title}
              productPrice={item.price}
              selectedProduct={selectedProduct}
              onClick={() => {
                setSelectedProduct(item.id);
                // setSelectedProducts((prev) => [...prev, item]);
                // setSelectedProducts(selectedProducts.concat(item.id));
                arrayHandler(item);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
