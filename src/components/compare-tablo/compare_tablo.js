import React from "react";
import "./compare_tablo_styled.scss";
import useWindowSize from "../../custom-hooks/useWindowSize";

export default function CompareTablo(props) {
  const size = useWindowSize();
  //console.log(props.products);

  return (
    <div key={"comparetablo"} className="tabloContent">
      <div className="title">
        <p>Category </p>
        <p>Price</p>
        <p>Rate</p>
      </div>

      {props.products.length > 0 &&
        props.products.map((item) => {
          return (
            <div key={item.id} className="productContent">
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.rating.rate}</p>
            </div>
          );
        })}
    </div>
  );
}
