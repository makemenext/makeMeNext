import React from "react";
import "../../assets/styles/desktop/demoD.css";

function DemoD() {
  return (
    <div>
      <strong style={{fontSize:"20px"}}>Desktop</strong>
      <div className="desktopContainer">
        This is a demo component rendering css from (relative
        path)"./styles/desktop/demoD.css"
      </div>
    </div>
  );
}

export default DemoD;
