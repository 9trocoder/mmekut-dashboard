import React from "react";
import { closeIcon } from "../Utils/tools";
import Calendarpage from "../page/Calendar";

function Calendarcard({ handleCloseCalendar, handleshowrighttab }) {
  return (
    <div className="page-content">
      <div className="homeheader">
        <p className="homeheader_title">Calendar</p>
        <div className="closecalendar" onClick={handleCloseCalendar}>
          {closeIcon}
        </div>
      </div>
      <Calendarpage handleClick={handleshowrighttab} />
    </div>
  );
}

export default Calendarcard;
