import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404-Page Not Found</h1>
      <Link to="/" className="btn btn-danger">
      Click to go to the home page..
      </Link>
    </>
  );
}

export default PageNotFound;
