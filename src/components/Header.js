import React from "react";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <img src={Logo} alt="Logo Deliveroo" className="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
