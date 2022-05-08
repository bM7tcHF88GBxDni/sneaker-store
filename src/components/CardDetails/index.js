import React, { useState } from "react";
import css from "./CardDetails.module.css";

function CardDetails({ shoe }) {
  const [details, setDetails] = useState(false);

  function toggleDetails() {
    setDetails(!details);
  }

  function toggleOn() {
    setDetails(true);
  }

  function toggleOff() {
    setDetails(false);
  }

  if (details) {
    return (
      <div
        className={css.moreDetails}
        onClick={toggleDetails}
        onMouseLeave={toggleOff}
      >
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
        <a
          className={css.link}
          href={shoe.url}
          target="_blank"
          rel="noreferrer"
        >
          Go to page
        </a>
        <div className={css.moreTitle}>{shoe.title}</div>
      </div>
    );
  }

  return (
    <div
      className={css.lessDetails}
      onMouseEnter={toggleOn}
      onClick={toggleDetails}
    >
      <div className={css.lessTitle}>{shoe.title}</div>
    </div>
  );
}

export default CardDetails;
