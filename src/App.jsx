import { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { SiteContext } from "./Context/SiteContext";

function App() {
const {user,handleLogin,handleLogOut}=useContext(SiteContext)

  return (
    <>
      
      <Navbar />
      <div className="container">
        <div className="col-sm-12">
          <SiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
