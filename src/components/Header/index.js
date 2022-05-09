import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

import css from "./Header.module.css";

function Header() {
  const dropdown = useSpring({
    from: { position: "relative", bottom: "15vh" },
    to: { position: "relative", bottom: "0vh" },
    config: config.gentle,
  });

  return (
    <animated.div style={dropdown}>
      <div className={css.logoContainer}>
        <img
          src="./sole.svg"
          alt="The Sole Supplier Logo"
          className={css.logo}
        />
      </div>
    </animated.div>
  );
}

export default Header;
