import React, { useState } from "react";
import Dashboardlayout from "../components/Dashboardlayout";
import { useLocation } from "react-router-dom";
import Documenthome from "../components/Documenthome";

function Documents() {
  const location = useLocation();
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
      <Documenthome
        homearrow={homearrow}
        handledisplay={() => {
          setshownav("flex");
          sethomearrow("none");
        }}
      />
    </Dashboardlayout>
  );
}

export default Documents;
