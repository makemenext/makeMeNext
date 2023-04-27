import React, { useState, useEffect } from "react";
// import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
import {RxHamburgerMenu} from "react-icons/rx"


import { SidebarData } from "./NavBarData";

import "../../assets/styles/mobile/Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
   


  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        
        <div className="navbar">
          <a to="#" className="menu-bars">
            {/* <FaIcons.FaBars  className="bars" onClick={showSidebar}/>  */}
            <RxHamburgerMenu className="bars" onClick={showSidebar}/>
          </a>
        </div>
        
        <div style={{opacity: sidebar ? "0.7" : "1"}}>
      
        </div>


        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <a to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </a>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <>
                <li key={index} className={item.cName}>
                  <a to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
                </>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
