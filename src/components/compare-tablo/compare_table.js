import React from "react";
import "./compare_table_styled.scss";

export default function CompareTable({ products, onClick }) {
  return (
    <div key={"comparetable"} className="tableContent">
      <div className="comparetable">
        <div className="titles">
          <p>Category </p>
          <p>Price</p>
          <p>Rate</p>
        </div>
        {products.length > 0 &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.category}</p>
                <p>{`${item.price} $`}</p>
                <p>{item.rating.rate}</p>
              </div>
            );
          })}
      </div>
      <button
        disabled={products.length < 1 ? true : false}
        className="removeAll"
        onClick={onClick}
      >
        <p className="removeText">
          {products.length < 2 ? "REMOVE" : "REMOVE ALL"}
        </p>
      </button>
    </div>
  );
}
