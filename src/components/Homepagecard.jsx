import React, { useState } from "react";
import {
  addIconSmall,
  arrowdowngray,
  arrowright,
  calendarIconSmall,
  imtasks,
  otherIconTask,
  searchIcon,
  tasks,
} from "../Utils/tools";
import Task from "./Task";
import Importanttaskcard from "./Importanttaskcard";

function Homepagecard({
  homearrow,
  handledisplay,
  handleshowtaskdetails,
  handleshowothertabs,
}) {
  const [showimportanttask, setshowimportanttask] = useState(false);
  return (
    <div className="page-content">
      <div className="homeheader">
        <div className="homeheaderleft">
          <div
            style={{ display: `${homearrow}` }}
            className="home_headericon"
            onClick={handledisplay}
          >
            {arrowright}
          </div>
          <label className="homeheader_title">Home</label>
        </div>

        <div className="homeheader_iconcnt" onClick={handleshowothertabs}>
          {calendarIconSmall}
          <p className="homeheader_icontitle">Calendar</p>
        </div>
      </div>
      <div className="task-wrapper">
        <div className="task-wrapper-item">
          <p className="task-wrappertitle">Important Task</p>
          <div className="importanttask-cnt">
            <div
              className="importanttask-btn"
              onClick={() => setshowimportanttask(true)}
            >
              {addIconSmall}
              <label> Add your most important task here</label>
            </div>

            {showimportanttask && (
              <>
                <div
                  className="importantaskesoverlay"
                  onClick={() => setshowimportanttask(false)}
                />
                <div className="importantaskesbody">
                  <div className="importantaskestop">
                    <div className="ittsearch">{searchIcon}</div>
                    <input
                      type="text"
                      placeholder="Search for task"
                      className="ittinput"
                    />
                  </div>
                  <div className="importantaskesmiddle">
                    {imtasks.slice(0, 4).map((task, key) => (
                      <Importanttaskcard
                        task={task}
                        key={key}
                        handleClick={() => setshowimportanttask(false)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
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
          {tasks.slice(0, 2).map((task, key) => (
            <Task task={task} key={key} handleClick={handleshowtaskdetails} />
          ))}
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
  );
}

export default Homepagecard;
