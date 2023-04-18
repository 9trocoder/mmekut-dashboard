import React from "react";
import mmekutlogo from "../assets/Svg/mmekutlogo.svg";
import "./Workspaceonboarding.css";

function Workspaceonboarding() {
  return (
    <div className="workonboarding_cnt">
      <div className="workonboarding__header">
        <img src={mmekutlogo} alt="" />
       <div className="workonboardlist">
        <p>1 of 7</p>
        <div 
        className="workonboarding_progress">
          <div className="workonboardingprog" />
        </div>
       </div>
        
      </div>
      <div className="workonboardingmiddle">
        <p className="workonboardques">Name of your Workspace:</p>
        <input
          type="text"
          placeholder="Githarita Workspace"
          className="workonboardinput"
        />
      </div>

      <div className="workonbardbtnbody">
        <button className="workonboardbtn">Continue</button>
      </div>
    </div>
  );
}

export default Workspaceonboarding;
