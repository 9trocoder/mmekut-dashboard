import React, { useEffect, useState } from "react";
import {
  addIconSmall,
  arrowdowngray,
  calendarIconSmall,
  chatNotActive,
  clockIcon,
  homeTextActive,
  closeIcon,
  doneIcon,
  moreIcon,
  otherIconTask,
  peopleAddIcon,
  shareIcon,
  uploadIcon,
  doneMarkIcon,
  tasks,
  homeIconActive,
  taskNotActive,
  notificationNotActive,
  workspaceTextNotActive,
  chatTextNotActive,
  notificationTextNotActive,
  addworkspaceicon,
} from "../Utils/tools";
import mmekutlogo from "../assets/Svg/mmekutlogo.svg";
import p2img from "../assets/images/p2.png";
import p1img from "../assets/images/p1.png";
import p3img from "../assets/images/p3.png";
import p4img from "../assets/images/p4.png";
import p5img from "../assets/images/p5.png";
import "./Homepage.css";
import sendIcon from "../assets/Svg/send.svg";
import attachIcon from "../assets/Svg/chatadd.svg";
import Calendarpage from "./Calendar";
import Task from "../components/Task";
import { Link } from "react-router-dom";

function Homepage() {
  let [incre, setIcre] = useState(1);
  let [dcre, setDcre] = useState(0);
  const [shownext, setShowNext] = useState(true);
  const [showprev, setShowPrev] = useState(false);
  const [alternatetab, setAlternatetab] = useState(false);
  const [rightbartab, setRightbartab] = useState(false);
  const [markdone, setMarkdone] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showprofilecard, setprofilecard] = useState(false);
  const [showworkspacecard, setshowworkspacecard] = useState(false);
  const [showworkspaceonboarding, setshowworkspaceonboarding] = useState(false);
  const [shownav, setshownav] = useState("");
  const [homearrow, sethomearrow] = useState("");
  const [showoverlay, setshowoverlay] = useState("");
  const peoplelist = [p2img, p1img, p3img];

  const addTaskIcon = (
    <svg
      width="13"
      height="13"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14V12ZM25 14C25.5523 14 26 13.5523 26 13C26 12.4477 25.5523 12 25 12V14ZM14 1C14 0.447715 13.5523 0 13 0C12.4477 0 12 0.447715 12 1H14ZM12 25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25H12ZM1 14H25V12H1V14ZM12 1V25H14V1H12Z"
        fill="#9A9FBF"
      />
    </svg>
  );

  const doneTaskIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.82845 0.0617931C5.00354 0.176277 5.05269 0.411026 4.93821 0.586115L2.36247 4.52548C2.30177 4.61833 2.20342 4.67985 2.0934 4.69391C1.98337 4.70797 1.87272 4.67306 1.79064 4.59845L0.123988 3.08332C-0.0308048 2.9426 -0.0422106 2.70304 0.0985092 2.54825C0.239229 2.39346 0.47879 2.38204 0.633583 2.52277L1.97152 3.73907L4.30415 0.171537C4.41864 -0.00355183 4.65336 -0.0526846 4.82845 0.0617931Z"
        fill="#9A9FBF"
      />
    </svg>
  );

  const arrowleft = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="#0184fb"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
        fill="#0184fb"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const arrowright = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="#0184fb"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
        fill="#0184fb"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const settingsicon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="#9A9FBF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
        fill="#9A9FBF"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const closeicon = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="#9A9FBF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="#9A9FBF"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

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
    <div className="task-manager">
      {shownav !== "" && (
        <div
          className="navoverlay"
          onClick={() => {
            setshownav("");
            sethomearrow("flex");
          }}
        />
      )}
      <div className="left-bar" style={{ display: `${shownav}` }}>
        <div className="navbar">
          <div className="navbar__header">
            <div className="logonav">
              <img src={mmekutlogo} alt="" />
              <button
                className="navbar_headericon"
                onClick={() => {
                  setshownav("none");
                  sethomearrow("flex");
                }}
              >
                {arrowleft}
              </button>
            </div>
          </div>
          <div className="navbaritemscnt">
            <div className="navbaritemscnt-items nbiciactive">
              {homeIconActive}
              <label>{homeTextActive}</label>
            </div>

            <div className="navbaritemscnt-items">
              {taskNotActive}
              <label>{workspaceTextNotActive}</label>
            </div>

            <div className="navbaritemscnt-items">
              {chatNotActive}
              <label>{chatTextNotActive}</label>
            </div>

            <div className="navbaritemscnt-items">
              {notificationNotActive}
              <label>{notificationTextNotActive}</label>
            </div>
          </div>
          <div className="navbar__bottom">
            <div className="navbar__bottomleft">
              <div className="navbarprofile">
                <img src={p2img} alt="" onClick={() => setprofilecard(true)} />
                <div className="userstatus" />
                {showprofilecard && (
                  <>
                    <div
                      className="navbarprofileoverlay"
                      onClick={() => setprofilecard(false)}
                    />
                    <div className="navbarprofilebody">
                      <div className="navbarprofilebodytop">
                        <div
                          className="npbclose"
                          onClick={() => setprofilecard(false)}
                        >
                          {closeIcon}
                        </div>
                        <div className="npbtitem">
                          <div className="npbtitems">
                            <img src={p2img} alt="" />
                            <div className="userstatus" />
                          </div>
                          <div className="npbtilabel">Emmanuel Adeyemi</div>
                        </div>
                      </div>
                      <div className="navbarprofilebodymiddle">
                        <Link to="/" className="npblinks">
                          My Settings
                        </Link>
                        <Link to="/" className="npblinks">
                          Notifications
                        </Link>
                        <Link to="/" className="npblinks">
                          Sign out
                        </Link>
                      </div>
                      <div className="navbarprofilebodybottom">
                        <Link to="/" className="npblinks">
                          Help
                        </Link>
                        <Link to="/" className="npblinks">
                          Dark mode
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="workspaceprofile">
                <div
                  className="workspaceimg"
                  onClick={() => setshowworkspacecard(true)}
                >
                  <label>G</label>
                </div>
                <label
                  className="workspaceprofilename"
                  onClick={() => setshowworkspacecard(true)}
                >
                  Githarita
                </label>
                {showworkspacecard && (
                  <>
                    <div
                      className="navbarworkspaceoverlay"
                      onClick={() => setshowworkspacecard(false)}
                    />
                    <div className="navbarworkspacebody">
                      <div className="navbarprofilebodytop">
                        <div
                          className="npbclose"
                          onClick={() => setshowworkspacecard(false)}
                        >
                          {closeIcon}
                        </div>
                        <div className="npbtitem">
                          <div className="workspaceimg">
                            <label>G</label>
                          </div>
                          <div className="npbtilabel">Githarita</div>
                        </div>
                      </div>
                      <div className="navbarprofilebodymiddle">
                        <div className="navbarworkspacemiddleimage">
                          <div className="navbarworkspacepresent">
                            <div className="workspacepresentimg">
                              <label>G</label>
                            </div>
                          </div>
                          <div
                            onClick={() => setshowworkspaceonboarding(true)}
                            className="navbarprofileaddworkspace"
                          >
                            {addworkspaceicon}
                          </div>
                        </div>
                      </div>
                      <div className="navbarprofilebodybottom">
                        <Link to="/" className="npblinks">
                          Settings
                        </Link>
                        <Link to="/" className="npblinks">
                          Invite
                        </Link>
                        <Link to="/" className="npblinks">
                          Workspaces
                        </Link>
                        <Link to="/" className="npblinks">
                          Security & Permissions
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="navbar__bottomright">
              <div className="navbarsettingicon">{settingsicon}</div>
            </div>
          </div>
        </div>
      </div>

      {showworkspaceonboarding && (
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
              <div
                className="closeicon"
                onClick={() => setshowworkspaceonboarding(false)}
              >
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
                <button
                  className="workonboardbtn"
                  onClick={() => handleNext()}
                >
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
                  onClick={() => setshowworkspaceonboarding(false)}
                >
                  Create Workspace
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
            </div>
          </div>
        </>
      )}

      {!showCalendar && (
        <div className="page-content">
          <div className="homeheader">
            <div className="homeheaderleft">
              <div
                style={{ display: `${homearrow}` }}
                className="home_headericon"
                onClick={() => {
                  setshownav("flex");
                  sethomearrow("none");
                }}
              >
                {arrowright}
              </div>
              <label className="homeheader_title">Home</label>
            </div>

            <div
              className="homeheader_iconcnt"
              onClick={() => {
                setShowCalendar(true);
                setRightbartab(false);
                setAlternatetab(false);
              }}
            >
              {calendarIconSmall}
              <p className="homeheader_icontitle">Calendar</p>
            </div>
          </div>
          <div className="task-wrapper">
            <div className="task-wrapper-item">
              <p className="task-wrappertitle">Important Task</p>
              <div className="importanttask-cnt">
                <div className="importanttask-btn">
                  {addIconSmall}
                  <label> Add your most important task here</label>
                </div>
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
                <Task
                  task={task}
                  key={key}
                  handleClick={() => setRightbartab(true)}
                />
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
      )}
      {showCalendar && (
        <div className="page-content">
          <div className="homeheader">
            <p className="homeheader_title">Calendar</p>
            <div
              className="closecalendar"
              onClick={() => {
                setShowCalendar(false);
                setRightbartab(false);
                setAlternatetab(false);
              }}
            >
              {closeIcon}
            </div>
          </div>
          <Calendarpage handleClick={() => setRightbartab(true)} />
        </div>
      )}

      {!rightbartab && (
        <div className="right-bartutor">
          <p>Click on task title to view details</p>
        </div>
      )}
      {rightbartab && (
        <div className="right-bar right-bar_res">
          <div className="hometaskheader">
            <div className="hometaskheader-left">
              <div className="hometaskheader-left1">
                <div
                  className="rightbarclose"
                  onClick={() => setRightbartab(false)}
                >
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
                <label
                  className={markdone ? "hmthldonemark" : "htmthldonenmark"}
                >
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
                onClick={() => setAlternatetab(true)}
              >
                {chatNotActive}
              </div>

              {shareIcon}
              {moreIcon}
            </div>
          </div>
          <div className="taskwrapper-task">
            <div className="taskwrapper-taskitem">
              <p className="taskwrapper-title">
                Work on the user settings page
              </p>
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
      )}

      {alternatetab && (
        <div className="alternate-bar alternate-bar_res">
          <div className="alternatebarheader">
            <div
              className=""
              style={{ cursor: "pointer" }}
              onClick={() => setAlternatetab(false)}
            >
              {closeIcon}
            </div>

            {moreIcon}
          </div>

          <div className="alternatecomments">
            <div className="alternatecommentsitem">
              <img src={p2img} alt="" />
              <div className="alternatecommentsitem-right">
                <div className="acirtop">
                  <label className="acirtopname">9trocoder</label>
                  <label className="acirtoptime">11:44 AM</label>
                </div>
                <div className="acirbottom">
                  <p className="acirbottommessage">
                    Could you please notify me about the issues on the landing
                    page, so that we could fix it together, he designed it, so
                    he knows the outcome of it.
                  </p>
                </div>
              </div>
            </div>
            <div className="alternatecommentsitem">
              <img src={p3img} alt="" />
              <div className="alternatecommentsitem-right">
                <div className="acirtop">
                  <label className="acirtopname">Amina</label>
                  <label className="acirtoptime">6:18 PM</label>
                </div>
                <div className="acirbottom">
                  <p className="acirbottommessage">
                    The places that should have drop down options for the
                    'account preference' section don't have them
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="alternatebottom">
            <div className="alternateattach">
              <img src={attachIcon} alt="" />
            </div>
            <input type="text" placeholder="Comment or type a message..." />
            <div className="alternatesend">
              <img src={sendIcon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
