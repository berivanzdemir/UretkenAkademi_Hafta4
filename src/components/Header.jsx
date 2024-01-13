import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import "./Header.css"
import HeadDefault from "./HeadDefault";
function Header() {
  return (
    <>
      <HeadDefault />
      <Search />
      <Navbar />
    </>
  );
}

export default Header;
