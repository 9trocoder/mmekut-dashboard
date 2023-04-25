import React from "react";
import {
  arrowright,
  chatpeople,
  chatpeoplelist,
  deliveredIcon,
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
          <div className="chatmoreicon">{chatpeople}</div>
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
            <div className="chatpeoplecard" key={key}>
              <div className="chatpeoplecardleft">
                <img
                  className="chatpeoplecardimage"
                  src={chatlist.profilepicture}
                  alt=""
                />
              </div>
              <div className="chatpeoplecardright">
                <div className="chatpeoplecardrighttop">
                  <div className="cpcrleft">
                    <p>{chatlist.name}</p>
                  </div>

                  <div className="cpcright">
                    <p>{chatlist.msgtime}</p>
                  </div>
                </div>
                <div className="chatpeoplecardrightbottom">
                  <div className="cpcrbleft">{deliveredIcon}</div>
                  <p className="cpcbleftmessage">{chatlist.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chathome;
