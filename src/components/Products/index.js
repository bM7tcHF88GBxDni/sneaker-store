import React from "react";
import data from "../../data.js";

function Products() {
  console.log(data);

  return (
    <>
      {/* placeholder string class */}
      <div className={"css.productsContainer"}>
        {
          /* Map through data here */
          data.map((shoe, index) => {
            return <div>shoe + {index}</div>;
          })
        }
      </div>
    </>
  );
}

export default Products;
