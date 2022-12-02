import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";

import ProductCard from "../product-card/card";
import useWindowSize from "../../custom-hooks/useWindowSize";
import Loader from "./loading";
import CompareTablo from "../compare-tablo/compare_tablo";
import "../pages/comparison_page.scss";
import { IconErrorNotify, IconWarningNotify } from "../icons/notify_icons";

export default function ComparisonPage() {
  const size = useWindowSize();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [{ data, loading, error }, refetch] = useAxios(
    "https://fakestoreapi.com/products"
  );
  const [showWarning, setShowWarning] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    selectedProducts.length >= 3 && setShowWarning(true);
    return () => {
      setShowWarning(false);
    };
  }, [selectedProducts]);

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

    const sameCategory = selectedProducts.find(
      (object) => item.category !== object.category
    );

    hasParentId || sameCategory
      ? setSelectedProducts(
          selectedProducts.filter((ele) => ele.id !== item.id)
        )
      : setSelectedProducts((prev) => [...prev, item].slice(0, 3));

    sameCategory && selectedProducts.length < 3 && setShowError(true);
  };

  // console.log(selectedProducts);

  return (
    <div className="pageContainer">
      {showWarning && (
        <div className="warning">
          <IconWarningNotify />
          <p>
            You have reached the maximum number of products that can be
            compared.
          </p>
          <button onClick={() => setShowWarning(false)}>close</button>
        </div>
      )}

      {showError && (
        <div className="error">
          <IconErrorNotify />
          <p>You can only compare products in the same category. </p>
          <button onClick={() => setShowError(false)}>close</button>
        </div>
      )}

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
              selectedProducts={selectedProducts}
              onClick={() => {
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
