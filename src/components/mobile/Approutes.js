import React, {useEffect} from "react";
// import Loginform from "./Loginform";
import Header from "./Header";
import Showsalon from "./Showsalon";
<<<<<<< HEAD
// import Changingtext from "./Changingtext"
// import Card from "./Card";
=======
import Changingtext from "./Changingtext"
import Card from "./Card";
import Signup from "./Signup";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

>>>>>>> 9e2e298b441a74adb4a6fcb578fda1b3fb6167e5
import "./demo.css";
import Offers from "./Offers";

function Approutes() {
  return (
<<<<<<< HEAD
    <div className="container">
      {/* <Header></Header>  */}
       {/* <Showsalon></Showsalon>  */}
        {/* <Changingtext></Changingtext> 
         */}
         {/* <Card></Card> */}
         <Offers></Offers>
      
    </div>
=======
   
    <Router>
      <Routes>
        <Route exact path="/" element={<div>hello</div>}></Route>
        <Route exact path="/login" element={<Loginform />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/services" element={<Showsalon />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/card" element={<Card />}></Route>
      </Routes>
    </Router>
>>>>>>> 9e2e298b441a74adb4a6fcb578fda1b3fb6167e5
  );
}

export default Approutes;
