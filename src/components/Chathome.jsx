import React from "react";
import { arrowright } from "../Utils/tools";

function Chathome({
  homearrow,
  handledisplay,
  handleshowchatdetails,
  handleshowothertabs,
}) {
  return (
    <div className="chat_content">
      <div className="chatheader">
        <div className="chatheaderleft">
          <div
            className="chat_headericon"
            style={{ display: `${homearrow}` }}
            onClick={handledisplay}
          >
            {arrowright}
          </div>
          <label className="chatheader_title">Chat</label>
        </div>
      </div>
    </div>
  );
}

export default Chathome;
