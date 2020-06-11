import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header role="banner">
        <img
          id="logo-main"
          src="https://image.flaticon.com/icons/svg/3057/3057195.svg"
          width="100"
          alt="Vegetables"
        />
        <div className="brand-name">FRUITS & VEGETABLES - NEPAL</div>
      </header>
    </div>
  );
};

export default Header;
