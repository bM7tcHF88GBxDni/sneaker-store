import { useSpring, animated, config } from "@react-spring/web";

import data from "../../data.js";
import Product from "../Product/index.js";
import css from "./Products.module.css";

function Products() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0.8 }, { opacity: 1 }],
  });

  const slideIn = useSpring({
    from: { position: "relative", left: "-50vh" },
    to: { position: "relative", left: "0vh" },
    config: config.wobbly,
  });

  return (
    <animated.div style={slideIn}>
      <animated.div style={fadeIn}>
        <div className={css.productsContainer}>
          {
            /* Map through sneakers data here */
            data.map((sneakers) => {
              return (
                <Product
                  key={Math.random() * 1000}
                  sneakers={sneakers}
                ></Product>
              );
            })
          }
        </div>
      </animated.div>
    </animated.div>
  );
}

export default Products;
