import React from "react";
import {
  arrowright,
  chatpeople,
  chatpeoplelist,
  jother,
  searchBig,
  searchIcon,
} from "../Utils/tools";

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
        <div className="chat-searchicon">{searchIcon}</div>

        <input
          type="text"
          className="chat-searchinput"
          placeholder="Search or start a new chat"
        />
      </div>
      <div className="chat-wrapper">
        <div className="chat-wrapperitems">
          {chatpeoplelist.map((chatlist, key) => (
            <div className="chatpeoplecard">
                <div className="chatpeoplecardleft">
                    <img className="chatpeoplecardimage" src={chatlist.profilepicture} alt="" />
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chathome;
