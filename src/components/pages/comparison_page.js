import React, { useState } from "react";
import useAxios from "axios-hooks";

import ProductCard from "../product-card/card";
import useWindowSize from "../../custom-hooks/useWindowSize";
import "../pages/comparison_page.scss";
import Loader from "./loading";
import CompareTablo from "../compare-tablo/compare_tablo";

export default function ComparisonPage() {
  const size = useWindowSize();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
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

  const arrayHandler = (item) => {
    const hasParentId = selectedProducts.find(
      (object) => item.id === object.id
    );
    if (!hasParentId) {
      setSelectedProducts((prev) => [...prev, item]);
    }
    if (hasParentId) {
      setSelectedProducts(selectedProducts.filter((ele) => ele.id !== item.id));
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
              selectedProducts={selectedProducts}
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
      <CompareTablo products={selectedProducts} />
    </div>
  );
}
