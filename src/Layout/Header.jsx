import React from "react";
import SearchBox from "../components/SearchBox";
import UtilityNav from "../components/UtilityNav";
import Navigation from "../components/Navigation";

import logo from "../assets/logo.png";
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
