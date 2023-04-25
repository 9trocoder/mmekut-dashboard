import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./Homepage.css";
import Dashboardlayout from "../components/Dashboardlayout";
import Workspaceonboarding from "../components/Workspaceonboarding";
import Calendarcard from "../components/Calendarcard";
import Tabmessage from "../components/Tabmessage";
import Homepagecard from "../components/Homepagecard";
import HomepageTaskDetails from "../components/HomepageTaskDetails";
import Commentcard from "../components/Commentcard";

function Homepage() {
  const location = useLocation();
  const [alternatetab, setAlternatetab] = useState(false);
  const [rightbartab, setRightbartab] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showworkspaceonboarding, setshowworkspaceonboarding] = useState(false);
  const [shownav, setshownav] = useState("");
  const [homearrow, sethomearrow] = useState("");

  return (
    <Dashboardlayout
      linkaddress={location.pathname}
      shownav={shownav}
      handlenavoverlay={() => {
        setshownav("");
        sethomearrow("flex");
      }}
      handlenavheaderClick={() => {
        setshownav("none");
        sethomearrow("flex");
      }}
    >

      {!showCalendar && (
        <Homepagecard
          homearrow={homearrow}
          handledisplay={() => {
            setshownav("flex");
            sethomearrow("none");
          }}
          handleshowtaskdetails={() => setRightbartab(true)}
          handleshowothertabs={() => {
            setShowCalendar(true);
            setRightbartab(false);
            setAlternatetab(false);
          }}
        />
      )}
      {showCalendar && (
        <Calendarcard
          handleCloseCalendar={() => {
            setShowCalendar(false);
            setRightbartab(false);
            setAlternatetab(false);
          }}
          handleshowrighttab={() => setRightbartab(true)}
        />
      )}

      {!rightbartab && (
        <Tabmessage tabmessage="Click on task title to view details" />
      )}
      {rightbartab && (
        <HomepageTaskDetails
          handleclosehometaskdetails={() => setRightbartab(false)}
          handlecommentcardclick={() => setAlternatetab(true)}
        />
      )}

      {alternatetab && (
        <Commentcard handleCloseComment={() => setAlternatetab(false)} />
      )}
    </Dashboardlayout>
  );
}

export default Homepage;
