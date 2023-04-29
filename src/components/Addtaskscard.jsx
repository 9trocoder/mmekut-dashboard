import React from "react";
import { closeIcon, closeicon, peopleAddIcon } from "../Utils/tools";

function Addtaskscard() {
  const addtaskicon = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="#9a9fbf"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
        fill="#9a9fbf"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
  return (
    <>
      <div className="addtaskcard_button">
        <button className="addtaskcardbtn">
          {addtaskicon}
          New task
        </button>

        <div className="addtakscardoverlay" />
        <div className="addtakscardbody">
          <div className="addtakscardbodycnt">
            <div className="addtcbctop">
              <div className="addtcbctopleft">
                <textarea
                  rows={1}
                  type="text"
                  autoFocus={true}
                  placeholder="Make a summary of your task..."
                  className="addtcbctopletinput"
                />
              </div>
              <div className="addtcbctopright">
                <div className="addtcbctoprightclosebtn">{closeicon}</div>
              </div>
            </div>
            <div className="addtcbcfor">
              <div className="addtcbcforproject">
                <p className="addtcbcforprojecttitle">Project</p>
                <div className="addtcbforprojectadd">{addtaskicon}</div>
              </div>
              <div className="addtcbcforproject">
                <p className="addtcbcforprojecttitle">Assign to</p>
                <div className="addtcbforprojectassign">{peopleAddIcon}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtaskscard;
