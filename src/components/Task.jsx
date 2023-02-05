import { format, parseISO } from "date-fns";
import { clockIcon, otherIconTask } from "../Utils/tools";

function Task({ task, handleClick }) {
    let startDateTime = parseISO(task.startDatetime);
    let endDateTime = parseISO(task.endDatetime);
    return (
      <div className="taskwrapper-myspacetask-cnt" onClick={handleClick}>
        <div className="tmstc-top">
          <div className="tmstc-top-left">
            <p className="tmstc-tlp1">{task.task}</p>
            <p className="tmstc-tlp2">{task.projectName}</p>
          </div>
          <div className="tmstc-top-right">{otherIconTask}</div>
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