import data from "../../data.js";
import Product from "../Product/index.js";
import css from "./Products.module.css";

function Products() {
  return (
    <>
      {/* placeholder string class */}
      <div className={css.productsContainer}>
        {
          /* Map through data here */
          data.map((shoe) => {
            return <Product key={Math.random() * 1000} shoe={shoe}></Product>;
          })
        }
      </div>
    </>
  );
}

export default Products;
