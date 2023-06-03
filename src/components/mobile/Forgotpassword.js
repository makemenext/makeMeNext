import React from "react";
import "../../assets/styles/mobile/Forgotpassword.css";
import { AiOutlineRight } from "react-icons/ai";
import lock from "../../assets/images/lock.png";

function Forgotpassword() {
  return (
    <div>
      <div className="forgot-head">
        <AiOutlineRight className="head-arrow" />
        <div>Forgot Password</div>
      </div>
      <div className="forgot-centre">
        <img className="forgot-image"
        src={lock}
        alt="Lock"
        />
        <div className="forgot-text">
          Enter your email associated 
         with your account  
        </div>
        

      </div>
      <div className="forgot-input">
        <div className="react-icon"> &gt;</div>

        <input
          className="input-text"
          type="email"
        //   ref={emailRef}
          placeholder="Enter the email"
        />
      </div>
      <div className="request-otp">
        <button className="request-btn">Send OTP</button>
      </div>
    </div>
  );
}

export default Forgotpassword;
