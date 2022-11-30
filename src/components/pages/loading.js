import React from "react";
import "../pages/loading.scss";

const Loader = () => {
  return (
    <div>
      <div className="loading-content">
        <h1>Loading...</h1>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
