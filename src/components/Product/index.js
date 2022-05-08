import CardDetails from "../CardDetails";
import css from "./Product.module.css";

function Product({ sneakers }) {
  return (
    <div className={css.productContainer}>
      {/* Background image for each product container */}
      <div
        style={{
          backgroundImage: `url(${sneakers.image || sneakers.imageone})`,
          backgroundSize: "cover",
          width: "inherit",
          height: "inherit",
        }}
      >
        <CardDetails sneakers={sneakers}></CardDetails>
      </div>
    </div>
  );
}

export default Product;
