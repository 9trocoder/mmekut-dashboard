import React from "react";
import { arrowright, chatpeople, jother, searchBig } from "../Utils/tools";

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

        <div className="chatheader_iconcnt">
          <div className="homeheader_iconcnt">{chatpeople}</div>
          <div className="chatmoreicon">{jother}</div>
        </div>
      </div>

      <div className="chat-search">
        <div className="chat-searchicon">{searchBig}</div>

        <input
          type="text"
          className="chat-searchinput"
          placeholder="Search or start a new chat"
        />
      </div>
      <div className="chat-wrapper"></div>
    </div>
  );
}

export default Chathome;
