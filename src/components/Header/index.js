import React from "react";

import css from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={css.logoContainer}>
        <img
          src="./sole.svg"
          alt="The Sole Supplier Logo"
          className={css.logo}
        />
      </div>
    </>
  );
}

export default Header;
