import React from "react";
import {
  addIconNotActive,
  addIconSmall,
  calendarIconSmall,
} from "../Utils/tools";
import p2img from "../assets/images/p2.png";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="task-manager">
      <div className="left-bar">
        <div className="navbar">
          <div className="navbar__header">
            <img src={p2img} alt="" />
            <div className="navbar__header-content">
              <p className="nhcp1">Emmanuel Oladimeji</p>
              <p className="nhcp2">FrontEnd Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="homeheader">
          <p className="homeheader_title">Home</p>
          <div className="homeheader_iconcnt">
            {calendarIconSmall}
            <p className="homeheader_icontitle">Calendar</p>
          </div>
        </div>
        <div className="task-wrapper">
          <div className="task-wrapper-item">
            <p className="task-wrappertitle">Important Task</p>
            <div className="importanttask-cnt">
              <div className="importanttask-btn">
                {addIconSmall}
                <label> Add your most important task here</label>
              </div>
            </div>
          </div>
          <div className="task-wrapper-item">
            <p className="task-wrappertitle">My Space</p>
            <div className="task-wrapper-myspace">
              <button>To do</button>
              <button>In Progress</button>
              <button>Review</button>
              <button>Completed</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-bar"></div>
    </div>
  );
}

export default Homepage;
