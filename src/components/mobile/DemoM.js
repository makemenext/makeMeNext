import React from "react";
import "../../assets/styles/mobile/demoM.css";

function DemoM() {
  return (
    <div>
      <strong>Mobile component</strong>
      <div className="mobileContainer">
        This is a demo component rendering css from (relative
        path)"./styles/mobile/demoM.css"
      </div>
    </div>
  );
}

export default DemoM;
