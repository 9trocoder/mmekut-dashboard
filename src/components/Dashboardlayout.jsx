import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  addworkspaceicon,
  arrowleft,
  arrowrightactive,
  arrowrightnotactive,
  chatActive,
  chatNotActive,
  chatTextActive,
  chatTextNotActive,
  closeIcon,
  documentTextActive,
  documentTextNotActive,
  homeIconActive,
  homeIconNotActive,
  homeTextActive,
  homeTextNotActive,
  notificationActive,
  notificationNotActive,
  notificationTextActive,
  notificationTextNotActive,
  settingsicon,
} from "../Utils/tools";
import mmekutlogo from "../assets/Svg/mmekutlogo.svg";
import p2img from "../assets/images/p2.png";
import Workspaceonboarding from "./Workspaceonboarding";

function Dashboardlayout({
  linkaddress,
  children,
  shownav,
  handlenavoverlay,
  handlenavheaderClick,
}) {
  const [showprofilecard, setprofilecard] = useState(false);
  const [showworkspacecard, setshowworkspacecard] = useState(false);
  const [showworkspaceonboarding, setshowworkspaceonboarding] = useState(false);
  return (
    <div className='task-manager'>
      {shownav !== "" && (
        <div className='navoverlay' onClick={handlenavoverlay} />
      )}
      <div className='left-bar' style={{ display: `${shownav}` }}>
        <div className='navbar'>
          <div className='navbar__header'>
            <div className='logonav'>
              <img src={mmekutlogo} alt='' />
              <button
                className='navbar_headericon'
                onClick={handlenavheaderClick}
              >
                {arrowleft}
              </button>
            </div>
          </div>
          <div className='navbaritemscnt'>
            <Link
              to='/home'
              className={`navbaritemscnt-items ${
                linkaddress === "/home" && "nbiciactive"
              }`}
            >
              {linkaddress === "/home" ? (
                <>
                  {homeIconActive}
                  <label>{homeTextActive}</label>
                </>
              ) : (
                <>
                  {homeIconNotActive}
                  <label>{homeTextNotActive}</label>
                </>
              )}
            </Link>

            <Link
              to='/chat'
              className={`navbaritemscnt-items ${
                linkaddress === "/chat" && "nbiciactive"
              }`}
            >
              {linkaddress === "/chat" ? (
                <>
                  {chatActive}
                  <label>{chatTextActive}</label>
                </>
              ) : (
                <>
                  {chatNotActive}
                  <label>{chatTextNotActive}</label>
                </>
              )}
            </Link>

            <Link
              to='/notification'
              className={`navbaritemscnt-items ${
                linkaddress === "/notification" && "nbiciactive"
              }`}
            >
              {linkaddress === "/notification" ? (
                <>
                  {notificationActive}
                  <label>{notificationTextActive}</label>
                </>
              ) : (
                <>
                  {notificationNotActive}
                  <label>{notificationTextNotActive}</label>
                </>
              )}
            </Link>
          </div>

          <div className='navbar__headerextra'>
            <Link
              to='/document'
              className={`navbar-headerextraitems ${
                linkaddress === "/document" && "navbarheaderextraactive"
              }`}
            >
              {linkaddress === "/document" ? (
                <>
                  <label>{documentTextActive}</label>
                  {arrowrightactive}
                </>
              ) : (
                <>
                  <label>{documentTextNotActive}</label>
                  {arrowrightnotactive}
                </>
              )}
            </Link>
          </div>
          <div className='navbar__bottom'>
            <div className='navbar__bottomleft'>
              <div className='navbarprofile'>
                <img src={p2img} alt='' onClick={() => setprofilecard(true)} />
                <div className='userstatus' />
                {showprofilecard && (
                  <>
                    <div
                      className='navbarprofileoverlay'
                      onClick={() => setprofilecard(false)}
                    />
                    <div className='navbarprofilebody'>
                      <div className='navbarprofilebodytop'>
                        <div
                          className='npbclose'
                          onClick={() => setprofilecard(false)}
                        >
                          {closeIcon}
                        </div>
                        <div className='npbtitem'>
                          <div className='npbtitems'>
                            <img src={p2img} alt='' />
                            <div className='userstatus' />
                          </div>
                          <div className='npbtilabel'>Emmanuel Adeyemi</div>
                        </div>
                      </div>
                      <div className='navbarprofilebodymiddle'>
                        <Link to='/' className='npblinks'>
                          My Settings
                        </Link>
                        <Link to='/' className='npblinks'>
                          Notifications
                        </Link>
                        <Link to='/' className='npblinks'>
                          Sign out
                        </Link>
                      </div>
                      <div className='navbarprofilebodybottom'>
                        <Link to='/' className='npblinks'>
                          Help
                        </Link>
                        <Link to='/' className='npblinks'>
                          Dark mode
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className='workspaceprofile'>
                <div
                  className='workspaceimg'
                  onClick={() => setshowworkspacecard(true)}
                >
                  <label>G</label>
                </div>
                <label
                  className='workspaceprofilename'
                  onClick={() => setshowworkspacecard(true)}
                >
                  Githarita
                </label>
                {showworkspacecard && (
                  <>
                    <div
                      className='navbarworkspaceoverlay'
                      onClick={() => setshowworkspacecard(false)}
                    />
                    <div className='navbarworkspacebody'>
                      <div className='navbarprofilebodytop'>
                        <div
                          className='npbclose'
                          onClick={() => setshowworkspacecard(false)}
                        >
                          {closeIcon}
                        </div>
                        <div className='npbtitem'>
                          <div className='workspaceimg'>
                            <label>G</label>
                          </div>
                          <div className='npbtilabel'>Githarita</div>
                        </div>
                      </div>
                      <div className='navbarprofilebodymiddle'>
                        <div className='navbarworkspacemiddleimage'>
                          <div className='navbarworkspacepresent'>
                            <div className='workspacepresentimg'>
                              <label>G</label>
                            </div>
                          </div>
                          <div
                            onClick={() => setshowworkspaceonboarding(true)}
                            className='navbarprofileaddworkspace'
                          >
                            {addworkspaceicon}
                          </div>
                        </div>
                      </div>
                      <div className='navbarprofilebodybottom'>
                        <Link to='/' className='npblinks'>
                          Settings
                        </Link>
                        <Link to='/' className='npblinks'>
                          Invite
                        </Link>
                        <Link to='/' className='npblinks'>
                          Workspaces
                        </Link>
                        <Link to='/' className='npblinks'>
                          Security & Permissions
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='navbar__bottomright'>
              <div className='navbarsettingicon'>{settingsicon}</div>
            </div>
          </div>
        </div>
      </div>

      {showworkspaceonboarding && (
        <Workspaceonboarding
          handlecloseworkspaceonboarding={() =>
            setshowworkspaceonboarding(false)
          }
        />
      )}
      {children}
    </div>
  );
}

export default Dashboardlayout;
