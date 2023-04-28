import React, { useState } from "react";
import "./Chat.css";
import Dashboardlayout from "../components/Dashboardlayout";
import { useLocation } from "react-router-dom";
import Tabmessage from "../components/Tabmessage";
import Chathome from "../components/Chathome";
import Addtaskscard from "../components/Addtaskscard";
import Chatview from "../components/Chatview";

function Chat() {
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
      

      <Chathome
        homearrow={homearrow}
        handledisplay={() => {
          setshownav("flex");
          sethomearrow("none");
        }}
        handleshowchatdetails={() => setRightbartab(true)}
      />
      {!rightbartab && (
        <Tabmessage tabmessage="Click on chat to view message" />
      )}

      {rightbartab && (
        <Chatview handlechatviewclose={() => setRightbartab(false)} handlechatresoursclick={() => setAlternatetab(true)} />
      )}
    </Dashboardlayout>
  );
}

export default Chat;
