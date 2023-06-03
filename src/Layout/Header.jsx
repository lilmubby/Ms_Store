import React from "react";
import SearchBox from "../components/SearchBox";
import UtilityNav from "../components/UtilityNav";
import Navigation from "../components/Navigation";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-around w-[85vw] mx-auto">
      <Link to={``}>
        <img src={logo} alt="Logo" className="pry_logo" />
      </Link>
      <Navigation />
      <SearchBox />
      <UtilityNav />
    </header>
  );
};

export default Header;
