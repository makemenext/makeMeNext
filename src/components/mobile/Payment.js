import React from 'react'
import { IoIosArrowDown} from "react-icons/io";  
import "../../assets/styles/mobile/Payment.css";

function Payment() {
  return (
    <div className='parent-payment' > 
          <div className="payment-heading">
          <IoIosArrowDown className='arrow'   />
               <div className='payment' >Payment Options</div>
               
          </div>
          <div >
            <div className='pay-for'>
          Pay for your booking at Kanshu Unisex Salon
          </div>
          <div className='recommended-heading'>
          <img
          className="recommended-img"
          // src="https://drive.google.com/file/d/1NWjrv0cMooHi_XXVHa7I3A7QgbqW4ruk/view?usp=share_link"
          // alt="recommended-img"
        />
          <div className='recommended'>
          
            Recommended
          </div>
          </div>

          </div>
          <div className='recommended-box'></div>
        </div>

  )
}

export default Payment