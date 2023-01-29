import React from "react";
import {
  addIconSmall,
  arrowdowngray,
  calendarIconSmall,
  chatNotActive,
  clockIcon,
  doneIcon,
  moreIcon,
  otherIconTask,
  peopleAddIcon,
  shareIcon,
  taskCalendarIcon,
  uploadIcon,
} from "../Utils/tools";
import p2img from "../assets/images/p2.png";
import p1img from "../assets/images/p1.png";
import p3img from "../assets/images/p3.png";
import "./Homepage.css";

function Homepage() {
  const peoplelist = [p2img, p1img, p3img];
  const addTaskIcon = (
    <svg
      width="13"
      height="13"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14V12ZM25 14C25.5523 14 26 13.5523 26 13C26 12.4477 25.5523 12 25 12V14ZM14 1C14 0.447715 13.5523 0 13 0C12.4477 0 12 0.447715 12 1H14ZM12 25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25H12ZM1 14H25V12H1V14ZM12 1V25H14V1H12Z"
        fill="#9A9FBF"
      />
    </svg>
  );
  const doneTaskIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.82845 0.0617931C5.00354 0.176277 5.05269 0.411026 4.93821 0.586115L2.36247 4.52548C2.30177 4.61833 2.20342 4.67985 2.0934 4.69391C1.98337 4.70797 1.87272 4.67306 1.79064 4.59845L0.123988 3.08332C-0.0308048 2.9426 -0.0422106 2.70304 0.0985092 2.54825C0.239229 2.39346 0.47879 2.38204 0.633583 2.52277L1.97152 3.73907L4.30415 0.171537C4.41864 -0.00355183 4.65336 -0.0526846 4.82845 0.0617931Z"
        fill="#9A9FBF"
      />
    </svg>
  );
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
      <div className="right-bar">
        <div className="hometaskheader">
          <div className="hometaskheader-left">
            <div className="hometaskheader-left1">
              {peoplelist.slice(0, 2).map((peoplelst, key) => (
                <img
                  src={peoplelst}
                  key={key}
                  alt="img"
                  className={`hmthlimg${key}`}
                />
              ))}
              <div className="hmthlicon"> {peopleAddIcon}</div>
            </div>
            <div className="hmthldone">
              {doneIcon}
              <label>MARK AS COMPLETE</label>
            </div>

            <div className="hmthldate">
              {taskCalendarIcon}
              <label>25 days left, Jan 4, 21:52</label>
            </div>
          </div>

          <div className="hometaskheader-right">
            <div className="">{chatNotActive}</div>
            
            {shareIcon}
            {moreIcon}
          </div>
        </div>
        <div className="taskwrapper-task">
          <div className="taskwrapper-taskitem">
            <p className="taskwrapper-title">Work on the user settings page</p>
          </div>
          <div className="taskwrapper-taskitem">
            <textarea
              placeholder="Description..."
              className="twtitextarea"
            ></textarea>
          </div>
          <div className="taskwrapper-taskitem">
            <div className="twtisubtask">
              <p className="twtisubtask-title">
                Subtask <sup>(1)</sup>
              </p>
              <div className="twtisubtaskcnt">
                <div className="twtisubtaskcnt-left">
                  <img src={p3img} alt="" />
                  <p>Add some things to the dashboard</p>
                  <label>5 days left, Jan 4, 21:52</label>
                </div>
                <div className="twtisubtaskcnt-right">
                  <div className="twtisubtaskcnt-check"></div>
                </div>
              </div>
              <div className="twtisubtask_listitem">
                {doneTaskIcon}
                <label>Create a new subtask</label>
              </div>
            </div>
          </div>
          <div className="taskwrapper-taskitem">
            <div className="twtisubtask">
              <p className="twtisubtask-title">
                Checklist <sup>(0/0)</sup>
              </p>
              <div className="twticheclist-cnt">
                {addTaskIcon}
                <label>Add a new Checklist</label>
                {peopleAddIcon}
              </div>
            </div>
          </div>
          <div className="taskwrapper-taskupload">
            {uploadIcon}
            <label>Upload files here or <span>browse</span></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
