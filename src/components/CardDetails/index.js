import React, { useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";

import css from "./CardDetails.module.css";

function CardDetails({ sneakers }) {
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

  const slideUp = useSpring({
    from: {
      height: "inherit",
      width: "inherit",
      transform: "translateY(30%)",
    },
    to: { height: "inherit", width: "inherit", transform: "translateY(0%)" },
    config: config.wobbly,
    reset: true,
  });

  //Show full product details
  if (details) {
    return (
      <animated.div style={slideUp}>
        <div
          className={css.moreDetails}
          onClick={toggleDetails}
          onMouseLeave={toggleOff}
        >
          <div className={css.brandPriceContainer}>
            <div className={css.brandName}>{sneakers.brand}</div>
            {/* Conditionally render RRP, or RRP and discounted price */}
            {sneakers.discountPrice ? (
              <div>
                <div className={css.discount}>£{sneakers.price}</div>
                <div className={css.sale}>£{sneakers.discountPrice}</div>
              </div>
            ) : (
              <div className={css.price}>£{sneakers.price}</div>
            )}
          </div>
          <a
            className={css.link}
            href={sneakers.url}
            target="_blank"
            rel="noreferrer"
          >
            Go to page
          </a>
          {/* Product name */}
          <div className={css.moreTitle}>{sneakers.title}</div>
        </div>
      </animated.div>
    );
  }

  //Show fewer details
  return (
    <div
      className={css.lessDetails}
      onMouseEnter={toggleOn}
      onClick={toggleDetails}
    >
      <div className={css.lessTitle}>{sneakers.title}</div>
    </div>
  );
}

export default CardDetails;
