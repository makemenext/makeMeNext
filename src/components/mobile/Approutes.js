import React, {useEffect} from "react";
import Loginform from "./Loginform";
import Navbar from "./Navbar";
import "./demo.css";

function Approutes() {

  return (
    <div className="container">
      <Navbar />
       <Loginform/>
    </div>
  );
}

export default Approutes;
