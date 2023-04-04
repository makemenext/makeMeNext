import React from 'react'
import { BsScissors} from "react-icons/bs";  
import { FiUser} from "react-icons/fi";  
import { RxHamburgerMenu} from "react-icons/rx";  
import "../../assets/styles/mobile/Header.css";


function Header() {
  return (
    <div className='top-nav' > 
          <div className="left-head">
          <BsScissors className='scissor'/> 
               <div className='makeme' >Makemenext</div>
          </div>
          <div className="right-head">
               <RxHamburgerMenu className='hamburger' />
          </div>
    </div>
  )
}

 export default Header
