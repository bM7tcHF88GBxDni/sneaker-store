import React, { useState } from "react";
import css from "./CardDetails.module.css";

function CardDetails({ shoe }) {
  const [details, setDetails] = useState(false);

  function toggleDetails() {
    setDetails(!details);
  }

  if (details) {
    return (
      <div className={css.lessDetails} onClick={toggleDetails}>
        <div className={css.lessTitle}>{shoe.title}</div>
      </div>
    );
  }

  return (
    <div className={css.moreDetails} onClick={toggleDetails}>
      <div className={css.brandPriceContainer}>
        <div className={css.brandName}>{shoe.brand}</div>
        {shoe.discountPrice ? (
          <div>
            <div className={css.discount}>£{shoe.price}</div>
            <div className={css.sale}>£{shoe.discountPrice}</div>
          </div>
        ) : (
          <div className={css.price}>£{shoe.price}</div>
        )}
      </div>
      <a className={css.link} href={shoe.url}>
        Go to page
      </a>
      <div className={css.moreTitle}>{shoe.title}</div>
    </div>
  );
}

export default CardDetails;
