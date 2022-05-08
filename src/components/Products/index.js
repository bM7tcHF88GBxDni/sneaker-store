import data from "../../data.js";
import Product from "../Product/index.js";
import css from "./Products.module.css";

function Products() {
  return (
    <>
      <div className={css.productsContainer}>
        {
          /* Map through sneakers data here */
          data.map((sneakers) => {
            return (
              <Product key={Math.random() * 1000} sneakers={sneakers}></Product>
            );
          })
        }
      </div>
    </>
  );
}

export default Products;
