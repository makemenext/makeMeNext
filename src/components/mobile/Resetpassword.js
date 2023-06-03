import React from "react";
import "../../assets/styles/mobile/Resetpassword.css";
import { AiOutlineRight } from "react-icons/ai";

function Resetpassword() {
  return (
    <div>
      <div className="reset-head">
        <AiOutlineRight className="head-arrow" />
        <div>Reset Password</div>
      </div>
      <div className="reset-parent">
        <div className="reset-input">
          <div className="react-icon">&gt;</div>
          <input
            className="input-text"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="reset-input">
          <div className="react-icon">&gt;</div>
          <input
            className="input-text"
            type="password"
            // ref={passwordRef}
            placeholder="Confirm your Password"
          />
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
