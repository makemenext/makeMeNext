import React, { useState, useEffect } from "react";
import "./App.css";
import DemoD from "./components/desktop/DemoD";
import DemoM from "./components/mobile/DemoM";

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
        <DemoM />
      ) : (
        <DemoD />
      )}
    </div>
  );
}

export default App;
