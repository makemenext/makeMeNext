import React from 'react'
import "../../assets/styles/mobile/Showsalon.css";
import { GoLocation} from "react-icons/go";  
function Showsalon() {
  return (
    <div className='wrapper'>
        <div className='main-div' >
              <img  className='salon-img' src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 " alt="" />
              <div className='info-section' >
                 <div className='name'>
                   <div className='salon-name'> Kanshu Unisex Salon</div>   
                   <div className='salon-distance'> 1.2km away </div>  
                   <div className='icon' ><GoLocation/></div>   
                      
                     </div>
                 <div className='salon-type'>Unisex</div>
                 <div className='adress' >Arya College Road Kharar</div>
              </div>
        </div>
    </div>
  )
}

export default Showsalon
