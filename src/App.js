import React, { useState, useEffect } from "react";
import "./App.css";
import Webroutes from "./components/desktop/Webroutes";
import Approutes from "./components/mobile/Approutes";
// import Navweb from "./components/desktop/Navweb";
// import Navapp from "./components/mobile/Navapp"; 
// import Header from "./components/desktop/Header"
import Header from "./components/mobile/Header";


import "./assets/styles/desktop/global.css"
import "./assets/styles/desktop/Navweb.css"
import "./assets/styles/mobile/global.css"

function App() {
  const [screenWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "inherit";
    setInnerWidth(window.innerWidth);
  }, []);
  
  return (
    <div>
      {screenWidth == 0 ? (
        ""
      ) : screenWidth <= 700 ? (
        <><Header /><Approutes /></>
        
      ) : (
        <Webroutes />
        
      )}  
    </div>
  );
}

export default App;
