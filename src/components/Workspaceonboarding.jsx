import React, { useEffect, useState } from "react";
import { closeicon } from "../Utils/tools";

function Workspaceonboarding({ handlecloseworkspaceonboarding }) {
  let [incre, setIcre] = useState(1);
  let [dcre, setDcre] = useState(0);
  const [shownext, setShowNext] = useState(true);
  const [showprev, setShowPrev] = useState(false);
  const workspacecolor = [
    "#DA342A",
    "#AD2089",
    "#9B62FA",
    "#826B02",
    "#0D1C63",
    "#4B75BF",
    "#143424",
    "#6F5345",
    "#367284",
    "#443226",
    "#675D8B",
    "#172C86",
    "#991B1A",
    "#4A2118",
    "#304B66",
    "#954A21",
    "#8B6B49",
  ];
  const howmanyworklist = [
    {
      id: 1,
      persons: "Just me",
    },
    {
      id: 2,
      persons: "2 - 5",
    },
    {
      id: 3,
      persons: "6 - 10",
    },
    {
      id: 4,
      persons: "11 - 50",
    },
    {
      id: 5,
      persons: "51 - 100",
    },
    {
      id: 6,
      persons: "101 - 200",
    },
    {
      id: 1,
      persons: "201 - 500",
    },
    {
      id: 1,
      persons: "I don't know",
    },
  ];
  const moodname = (
    <div className="workonboardingmiddle">
      <p className="workonboardques">Name of your Workspace:</p>
      <input
        type="text"
        placeholder="e.g co-workspace"
        className="workonboardinput"
      />
    </div>
  );

  const customizeworkspace = (
    <div className="customizeworkspace">
      <p className="workonboardques">Customize your workspace</p>
      <div className="customizeworkspacebody">
        <div className="customizeworkspaceleft">
          <p className="customizechooseprofile"> Avatar</p>
          <div className="cclpcnt">
            <div className="ccpdrag">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="ccpdragtext">
                Drag image here or <span>browse</span>
              </p>
            </div>
            <p className="ccor">or</p>
            <div className="ccpavatar">
              <p className="ccpavatartext">E</p>
            </div>
          </div>
        </div>
        <div className="customizeworkspaceright">
          <p className="customizechooseprofile">Theme</p>
          <div className="cwrcnt">
            {workspacecolor.map((wsc, key) => (
              <div
                className="workspacecolordiv"
                style={{ backgroundColor: `${wsc}` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const howmanypeoplework = (
    <div className="howmanypeoplework">
      <p className="workonboardques">
        How many people are you going to be working with?
      </p>
      <div className="howmanypeopleworkbody">
        {howmanyworklist.map((hmwlist, key) => (
          <button className="howmanyworkpbtn" key={key}>
            {hmwlist.persons}
          </button>
        ))}
      </div>
    </div>
  );

  const startusingworkspace = (
    <p className="startusingworkspacetitle">
      Start handling multiple projects across cross-functional teams,
      organizations and individuals on our platform.
    </p>
  );

  const workspaceonboardlist = [
    {
      id: 1,
      view: moodname,
    },
    {
      id: 2,
      view: customizeworkspace,
    },
    {
      id: 3,
      view: howmanypeoplework,
    },
    {
      id: 4,
      view: startusingworkspace,
    },
  ];
  useEffect(() => {
    if (incre === workspaceonboardlist.length) {
      setShowNext(false);
    } else if (incre > workspaceonboardlist.length) {
      setShowNext(false);
    }

    if (incre === 1) {
      setShowPrev(false);
    }
  }, [incre, workspaceonboardlist.length]);

  const handleNext = () => {
    if (incre === workspaceonboardlist.length) {
      setShowNext(false);
      setIcre(incre--);
    } else if (workspaceonboardlist.length > 1) {
      if (workspaceonboardlist.length > 1) {
        setShowPrev(true);
      } else {
        setShowPrev(false);
      }
    } else {
      setShowNext(true);
    }

    setIcre((incre = incre + 1));
    setDcre((dcre = dcre + 1));
  };

  const handlePrevious = () => {
    setIcre((incre = incre - 1));
    setDcre((dcre = dcre - 1));
    setShowNext(true);
  };
  return (
    <>
      <div className="workspaceonboardingoverlay" />
      <div className="workspaceonboardingbody">
        <div className="workonboardlist">
          <p>
            {incre} of {workspaceonboardlist.length}
          </p>
          {/* <div className="workonboarding_progress">
                  <div className="workonboardingprog" />
                 <div className="otherwok"></div>
                  <div className="otherwok"></div>
                  <div className="otherwok"></div>
                  <div className="otherwok"></div>
                  <div className="otherwok"></div>
                  <div className="otherwok"></div> 
                </div>*/}
          <div className="closeicon" onClick={handlecloseworkspaceonboarding}>
            {closeicon}
          </div>
        </div>
        {workspaceonboardlist.slice(dcre, incre).map((wsol, key) => (
          <div key={key}>{wsol.view}</div>
        ))}

        <div className="workonbardbtnbody">
          {showprev && (
            <button
              onClick={() => handlePrevious()}
              className="workonboardprevbtn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="#9a9fbf"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="#9a9fbf"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
          {shownext && (
            <button className="workonboardbtn" onClick={() => handleNext()}>
              Next
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
          {incre === 4 && (
            <button
              className="workonboardbtn"
              onClick={handlecloseworkspaceonboarding}
            >
              Create Workspace
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Workspaceonboarding;
