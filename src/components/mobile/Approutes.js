import React from "react";
import "../../assets/styles/mobile/demoM.css";
import Login from "./Login"; 
import Business from "./Business";
import Search from "./Search";
import Showsalon from "./Showsalon";
import Locationnav from "./Locationnav";
import Header from "./Header";
import Tocartnav from "./Tocartnav";
import Incartnav from "./Incartnav";
function Approutes(){
  return (
   <>
   <div>
     <Login></Login>    
         {/* <Business></Business>      */}
         {/* <Showsalon></Showsalon>   */}
                {/* <Locationnav> </Locationnav>  */}
                {/* <Header></Header> */}
         {/* <Search></Search>   */}
         {/* <Tocartnav></Tocartnav>  */}
         {/* <Incartnav></Incartnav>  */}
        </div> 
   </>
  );
}

export default Approutes;
