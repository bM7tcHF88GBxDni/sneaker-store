import CardDetails from "../CardDetails";
import css from "./Product.module.css";

function Product({ shoe }) {
  /*         
    title: "Nike Air Max 98",
    image:
    url:
    price: 90,
    discountPrice: 70
    currency: "GBP"
    brand: "Nike"
*/

  return (
    <div className={css.productContainer}>
      <div
        style={{
          backgroundImage: `url(${shoe.image || shoe.imageone})`,
          backgroundSize: "cover",
          width: "inherit",
          height: "inherit",
        }}
      >
        <CardDetails shoe={shoe}></CardDetails>
      </div>
    </div>
  );
}

export default Product;
