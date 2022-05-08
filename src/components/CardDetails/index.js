import React, { useState } from "react";
import css from "./CardDetails.module.css";

function CardDetails({ shoe }) {
  const [details, setDetails] = useState(false);

  if (details) {
  }

  return (
    <>
      <div>{shoe.brand}</div>
      {shoe.discountPrice ? (
        <>
          <div className={css.sale}>£{shoe.discountPrice}</div>
          <div className={css.discount}>£{shoe.price}</div>
        </>
      ) : (
        <div className={css.price}>£{shoe.price}</div>
      )}
      <div className={css.moreTitle}>{shoe.title}</div>
    </>
  );
}

export default CardDetails;
