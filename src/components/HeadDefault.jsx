import React from "react";
import "./Header.css"

function HeadDefault() {
  const Head = () => {};

  return (
    <div>
      <section className="head">
        <div className="container f_flex">
          <div className="left row"></div>
          <i className="fa fa-phone"></i>
          <label>+88012 3457 7894</label>
          <i className="fa fa-envelope"></i>
          <label> example@gmail.com</label>
        </div>
        <div>
          <div className="right row RText"></div>
          <label>Theme FAQ'S</label>
          <label>Need Helps</label>
          <span>🇹🇷</span>
          <label htmlFor="">TR</label>
          <span>🇺🇸</span>
          <label htmlFor="">USD</label>
        </div>
      </section>
    </div>
  );
}

export default HeadDefault;
