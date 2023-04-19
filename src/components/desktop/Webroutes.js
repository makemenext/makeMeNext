import React from "react";
import "../../assets/styles/desktop/demoD.css";
import Navweb from "./Navweb";
import Header from "./Header";
import "../../assets/styles/desktop/Navweb.css";


// import { BrowserRouter as Router} from "react-router-dom";



function Webroutes() {
  return (
    <>

      <strong style={{ fontSize: "20px" }}>Desktop component</strong>
      <div className="desktopContainer">
        All the dekstop associated components will be rendered here.
      </div>

    </>
  );
}

export default Webroutes;
