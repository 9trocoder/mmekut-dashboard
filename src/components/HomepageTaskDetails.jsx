import React, { useState } from "react";
import {
  addTaskIcon,
  chatNotActive,
  closeIcon,
  doneIcon,
  doneMarkIcon,
  doneTaskIcon,
  moreIcon,
  peopleAddIcon,
  shareIcon,
  uploadIcon,
} from "../Utils/tools";
import p1img from "../assets/images/p1.png";
import p2img from "../assets/images/p2.png";
import p3img from "../assets/images/p3.png";

function HomepageTaskDetails({
  handleclosehometaskdetails,
  handlecommentcardclick,
}) {
  const [markdone, setMarkdone] = useState(false);
  const peoplelist = [p2img, p1img, p3img];
  return (
    <div className="right-bar right-bar_res">
      <div className="hometaskheader">
        <div className="hometaskheader-left">
          <div className="hometaskheader-left1">
            <div className="rightbarclose" onClick={handleclosehometaskdetails}>
              {closeIcon}
            </div>
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
          <div
            className={markdone ? "hmthlmdone" : "hmthldone"}
            onClick={() => setMarkdone(!markdone)}
          >
            <>{markdone ? doneMarkIcon : doneIcon}</>
            <label className={markdone ? "hmthldonemark" : "htmthldonenmark"}>
              MARK AS COMPLETE
            </label>
          </div>

          {/* <div className="hmthldate">
              {taskCalendarIcon}
              <label>25 days left, Jan 4, 21:52</label>
            */}
        </div>

        <div className="hometaskheader-right">
          <div
            className=""
            style={{ cursor: "pointer" }}
            onClick={handlecommentcardclick}
          >
            {chatNotActive}
          </div>

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
          <label>
            Upload files here or <span>browse</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default HomepageTaskDetails;
