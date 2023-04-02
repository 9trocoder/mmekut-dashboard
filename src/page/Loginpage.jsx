import React from "react";
import mmekutlogo from "../assets/Svg/mmekutlogo.svg";
import loginimage from "../assets/images/loginimage.png";
import { mailIcon, passwordIcon } from "../Utils/tools";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  return (
    <div className="logincnt">
      <div className="loginleft">
        <div className="logintop">
          <img src={mmekutlogo} alt="" />
        </div>
        <div className="loginmiddle">
          <img src={loginimage} alt="" />
        </div>

        <div className="loginbottom">
          <p className="loginbottomtext">
            Built to handle multiple projects across cross-functional teams.
          </p>
        </div>
      </div>
      <div className="loginright">
        <button className="signupbuttontop" onClick={() => navigate("/signup")}>Sign up</button>
        <div className="logintopp">
          <img src={mmekutlogo} alt="" />
        </div>
        <div className="loginrighttop">
          <p>Welcome back!!</p>
          <label>Good to see you again, we have missed you.</label>
        </div>
        <div className="loginrightmiddle">
          <div className="loginitem">
            <label className="loginrightmiddlelabel">Email</label>
            <div className="inputcontainer">
              <div className="inputcontainericon">{mailIcon}</div>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="loginitem">
            <label className="loginrightmiddlelabel">Password</label>
            <div className="inputcontainer">
              <div className="inputcontainericon">{passwordIcon}</div>
              <input type="password" placeholder="Enter password" />
              <label className="forgotpasswordlabel">
                Forgot <span>Password</span> ?
              </label>
            </div>
          </div>
          <button className="login-btn" onClick={() => navigate("/mmekut")}>
            Log In
          </button>
          <div className="donhaveaccount">
            <p>Don't have an account?</p>
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </div>
        </div>

        <div className="loginrightbottom">
          <label>?</label>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
