import React from "react";
import "../../assets/styles/mobile/Login.css";
import "../../assets/styles/mobile/global.css";
// import "../../assets/styles/mobile/barberlogin.png";
// import "./barberlogin.png"; 

function Login() {
  return (
    <div className="wrapper">
      <div className="top-div">
        <img className="barber-img" src="https://media.istockphoto.com/id/1407090464/photo/cute-little-boy-at-the-barber-shop-getting-his-hairut.jpg?b=1&s=170667a&w=0&k=20&c=FKMaWXmWj1__lfQXUVROZyGGDSBUdrITjQrsCbKXo7Y=" alt="Barber" />
        <div className="login-acc">Login Account </div>
      </div>

      <div className="input-div">
        <div className="input-btn">
          <div className="react-icon"> &gt;</div>

          <input
            className="input-text"
            type="email"
            placeholder="Enter your email or phone number"
          />
        </div>
        <div className="input-btn">
          <div className="react-icon">&gt;</div>
          <input 
            className="input-text"
            type="password"
            placeholder="Enter your Password"
          />
        </div>

        <div className="frgt-pass">
          {/* <label htmlFor=""> Remember me</label>
          <input className="check" type="checkbox" /> */}
          <a href="">Forgot Password?</a>
        </div>

        <div className="login-btn">
          <button className="btn-design" >Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
