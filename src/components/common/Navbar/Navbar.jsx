import React from "react";
import MainNavbar from "./MainNavbar";
import MiddleNavbar from "./MiddleNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <MiddleNavbar />
      <MainNavbar />
    </div>
  );
};

export default Navbar;
