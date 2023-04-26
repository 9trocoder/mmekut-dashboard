import React, { useState } from "react";
import "./Calendar.css";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import {
  tasks,
} from "../Utils/tools";
import Task from "../components/Task";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Calendarpage({handleClick}) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  let selectedDayTasks = tasks.filter((task) =>
    isSameDay(parseISO(task.startDatetime), selectedDay)
  );

  return (
    <>
      <div className="calendarpage__cnt">
        <div className="calendarpage__cnt-top">
          <button onClick={previousMonth}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <p>{format(firstDayCurrentMonth, "MMMM yyyy")}</p>
          <button onClick={nextMonth}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="calendarpage__cnt-daylist">
          <p className="calendardaylist">Sun</p>
          <p className="calendardaylist">Mon</p>
          <p className="calendardaylist">Tue</p>
          <p className="calendardaylist">Wed</p>
          <p className="calendardaylist">Thur</p>
          <p className="calendardaylist">Fri</p>
          <p className="calendardaylist">Sat</p>
        </div>
        <div className="calendarpage__cnt-daydate">
          {days.map((day, dayIndex) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIndex === 0 && colStartClasses[getDay(day)],
                "pyam"
              )}
            >
              <button
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && "whitetext",
                  !isEqual(day, selectedDay) && isToday(day) && "textblue",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "textgray",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "textgrayfh",
                  isEqual(day, selectedDay) && isToday(day) && "bgblue",
                  isEqual(day, selectedDay) && !isToday(day) && "bggray",
                  !isEqual(day, selectedDay) && "bggrayhover",
                  (isEqual(day, selectedDay) || isToday(day)) && "istodaynaa",
                  "istodayna"
                )}
              >
                <time datetime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
              <div className="daydateWork">
                {tasks.some((task) =>
                  isSameDay(parseISO(task.startDatetime), day)
                ) && <div className="letsamsee"></div>}
              </div>
            </div>
          ))}
        </div>
        <section className="calendarpage__cnt-daydatetitle">
          <p className="task-wrappertitle">
            Taskes Scheduled for{" "}
            <time datetime={format(selectedDay, "yyyy-MM-dd")}>
              {format(selectedDay, "MMM dd, yyy")}
            </time>
          </p>

          <div className="taskesdlist">
            {selectedDayTasks.length > 0 ? (
              selectedDayTasks.map((task) => <Task handleClick={handleClick} task={task} key={task.id} />)
            ) : (
              <p className="calendarpage__notask">No Task for today.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}


let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default Calendarpage;
