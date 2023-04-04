import React from "react";
import "../../assets/styles/desktop/demoD.css";
import Navweb from "./Navweb";
import Header from "./Header";
import "../../assets/styles/desktop/Navweb.css";


function Webroutes() {
  return (
    <>
    <div >
      {/* <strong style={{ fontSize: "20px" }}>Desktop component</strong>
      <div className="desktopContainer">
        All the dekstop associated components will be rendered here. */}
        <Navweb></Navweb>
    
      {/* </div> */}
    </div>
    </>
  );
}

export default Webroutes;
