import React, {useEffect} from "react";
import Loginform from "./Loginform";
import Header from "./Header";
import Showsalon from "./Showsalon";
import Changingtext from "./Changingtext"
import Card from "./Card";
import Signup from "./Signup";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./demo.css";
import Facilities from "./Facilities";
import Business from "./Business";

function Approutes() {
  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<div>hello</div>}></Route>
        <Route exact path="/login" element={<Loginform/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/services" element={<Showsalon/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
        {/* <Route exact path="/card" element={<Card/>}></Route>  */}
        <Route exact path="/offers" element={<Facilities/>}></Route>
        <Route exact path="/form" element={<Business/>}></Route>
      </Routes>
    </Router>
  );
}

export default Approutes;
