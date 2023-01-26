import React from "react";
import {
  addIconSmall,
  arrowdowngray,
  calendarIconSmall,
  clockIcon,
  otherIconTask,
} from "../Utils/tools";
import p2img from "../assets/images/p2.png";
import p1img from "../assets/images/p1.png";
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
            <div className="taskwrapper-myspace-item">
              {arrowdowngray}
              <label>Today Task</label>
            </div>
            <div className="taskwrapper-myspacetask-cnt">
              <div className="tmstc-top">
                <div className="tmstc-top-left">
                  <p className="tmstc-tlp1">Work on the user settings page</p>
                  <p className="tmstc-tlp2">Ushy Dashboard</p>
                </div>
                <div className="tmstc-top-right">{otherIconTask}</div>
              </div>
              <div className="tmstc-bottom">
                <div className="tmstc-bottom-left">
                  {clockIcon}
                  <label>1:00 PM - 2:30 PM</label>
                </div>
                <img src={p1img} alt="" />
              </div>
            </div>
            <div className="taskwrapper-myspace-item tmioverdue">
              {arrowdowngray}
              <label>Overdue</label>
            </div>
            <div className="taskwrapper-myspaceoverdue-cnt"></div>
            <div className="taskwrapper-myspace-item">
              {arrowdowngray}
              <label>Completed</label>
            </div>
            <div className="taskwrapper-myspacecompleted-cnt">
              <div className="twmcc-top">
                <div className="twmcc-top-left">
                  <p className="twmcc-tlp1">Work on the user settings page</p>
                  <p className="twmcc-tlp2">Ushy Dashboard</p>
                </div>
                <div className="twmcc-top-right">{otherIconTask}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-bar"></div>
    </div>
  );
}

export default Homepage;
