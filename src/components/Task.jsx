import { format, parseISO } from "date-fns";
import { useState } from "react";
import { clockIcon, otherIconTask } from "../Utils/tools";
import arrowrightIcon from "../assets/Svg/arrowright.svg";

function Task({ task, handleClick }) {
  const [todaytdrop, setTodaytdrop] = useState(false);
  let startDateTime = parseISO(task.startDatetime);
  let endDateTime = parseISO(task.endDatetime);
  return (
    <div className="taskwrapper-myspacetask-cnt" onClick={handleClick}>
      <div className="tmstc-top">
        <div className="tmstc-top-left">
          <p className="tmstc-tlp1">{task.task}</p>
          <p className="tmstc-tlp2">{task.projectName}</p>
        </div>
        <div className="tmstc-top-right" onClick={() => setTodaytdrop(true)}>
          {otherIconTask}
        </div>
        {todaytdrop && (
          <>
            <div
              className="tmstc-bottomoverlay"
              onClick={() => setTodaytdrop(false)}
            />
            <div className="tmstc-topdropdown">
              <div className="tmstctditem">
                <label>Add to</label>
                <img src={arrowrightIcon} alt="" />
              </div>
              <div className="tmstctditem">
                <label>Duplicate</label>
              </div>
              <div className="tmstctditem">
                <label>Archive</label>
              </div>
              <div className="tmstctditem">
                <label>Delete</label>
              </div>
              <div className="tmstctditem">
                <label>Sharing & Permissions</label>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="tmstc-bottom">
        <div className="tmstc-bottom-left">
          {clockIcon}
          <label>
            <time datetime={task.startDatetime}>
              {format(startDateTime, "h:mm a ")}
            </time>{" "}
            -{" "}
            <time datetime={task.endDatetime}>
              {format(endDateTime, "h:mm a")}
            </time>
          </label>
        </div>
        <img src={task.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Task;
