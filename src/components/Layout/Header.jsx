import React from "react";
import SearchBox from "../Headers/SearchBox";
import UtilityNav from "../Headers/UtilityNav";
import Navigation from "../Headers/Navigation";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={``}>
        <img src={logo} alt="Logo" className="pry_logo" />
      </Link>
      <Navigation />
      <UtilityNav />
      <SearchBox />
    </header>
  );
};

export default Header;
