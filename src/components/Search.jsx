import React from "react";
import logo2 from "../common/assets/logo2.png"
function Search() {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo2} width={100} height={100} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
          <span>All Categories</span>
          </div>



        </div>
      </section>
    </>
  );
}

export default Search;
