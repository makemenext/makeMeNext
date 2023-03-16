import React, { useState, useEffect } from "react";
import "./App.css";
import Webroutes from "./components/desktop/Webroutes";
import Approutes from "./components/mobile/Approutes";
import "./assets/styles/desktop/global.css"
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
        <Approutes />
      ) : (
        <Webroutes />
      )}
    </div>
  );
}

export default App;
