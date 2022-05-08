import React, { useState } from "react";

import CardDetails from "../CardDetails";
import css from "./Product.module.css";

function Product({ shoe }) {
  const [details, setDetails] = useState(false);

  function toggleDetails() {
    setDetails(!details);
  }

  return (
    <div className={css.productContainer}>
      <div
        onClick={toggleDetails}
        style={{
          backgroundImage: `url(${shoe.image || shoe.imageone})`,
          backgroundSize: "cover",
          width: "inherit",
          height: "inherit",
        }}
      >
        <CardDetails shoe={shoe} viewDetails={details}></CardDetails>
      </div>
    </div>
  );
}

export default Product;
