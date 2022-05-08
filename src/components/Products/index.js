import React from "react";
import data from "../../data.js";
import Product from "../Product/index.js";

function Products() {
  console.log(data);

  return (
    <>
      {/* placeholder string class */}
      <div className={"css.productsContainer"}>
        {
          /* Map through data here */
          data.map((shoe) => {
            return <Product shoe={shoe}></Product>;
          })
        }
      </div>
    </>
  );
}

export default Products;
