import React, {useEffect} from "react";
import Loginform from "./Loginform";
import Header from "./Header";
import Showsalon from "./Showsalon";
import Changingtext from "./Changingtext"
import Card from "./Card";
import "./demo.css";

function Approutes() {

  return (
    <div className="container">
      {/* <Header></Header>  */}
       {/* <Showsalon></Showsalon>  */}
        {/* <Changingtext></Changingtext> 
         */}
         <Card></Card>
      
    </div>
  );
}

export default Approutes;
