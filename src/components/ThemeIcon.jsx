import React, { useContext } from "react";
import { lightTheme, darkTheme } from "./Icons"; 
import { SiteContext } from "../Context/SiteContext.jsx";

function ThemeIcons() {
  const { themeName, handleTheme } = useContext(SiteContext);

  return (
    <>
      {themeName === "light" ? (
        <button onClick={handleTheme} className="btn">
          {lightTheme} Light
        </button>
      ) : (
        <button onClick={handleTheme} className="btn">
          {darkTheme} Dark
        </button>
      )}
    </>
  );
}

export default ThemeIcons;
