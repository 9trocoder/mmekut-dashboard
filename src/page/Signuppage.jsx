import React from "react";
import mmekutlogo from "../assets/Svg/mmekutlogo.svg";
import signupimage from "../assets/images/signupimage.png";
import { mailIcon, passwordIcon, sigupprofileicon } from "../Utils/tools";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const navigate = useNavigate();
  return (
    <div className="logincnt">
      <div className="loginleft">
        <div className="logintop">
          <img src={mmekutlogo} alt="" />
        </div>
        <div className="loginmiddle">
          <img src={signupimage} alt="" />
        </div>

        <div className="loginbottom">
          <p className="loginbottomtext">
            Built to handle multiple projects across cross-functional teams.
          </p>
        </div>
      </div>
      <div className="loginright">
        <button className="signupbuttontop" onClick={() => navigate("/")}>
          Login
        </button>
        <div className="logintopp">
          <img src={mmekutlogo} alt="" />
        </div>
        <div className="loginrighttop">
          <p>Welcome to Mmekut</p>
          <label>Enter your personal details to signup</label>
        </div>
        <div className="loginrightmiddle">
          <div className="loginitem">
            <label className="loginrightmiddlelabel">Full Name</label>
            <div className="inputcontainer">
              <div className="inputcontainericon">{sigupprofileicon}</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div className="loginitem">
            <label className="loginrightmiddlelabel">Email</label>
            <div className="inputcontainer">
              <div className="inputcontainericon">{mailIcon}</div>
              <input type="text" placeholder="you@example.com" />
            </div>
          </div>
          <div className="loginitem">
            <label className="loginrightmiddlelabel">Choose Password</label>
            <div className="inputcontainer">
              <div className="inputcontainericon">{passwordIcon}</div>
              <input type="password" placeholder="Minimum 8 characters" />
              <label className="forgotpasswordlabel">Show</label>
            </div>
          </div>
          <label className="byclickbelow">
            By clicking the button below you agree to our
            <span> Terms of Service </span> and <span>Privacy Policy.</span>
          </label>
          <button className="login-btn" onClick={() => navigate("/home")}>
            Sign Up
          </button>

          <div className="donhaveaccount">
            <p>Already have an account?</p>
            <span onClick={() => navigate("/")}>Log in</span>
          </div>
        </div>

        <div className="loginrightbottom">
          <label>?</label>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
