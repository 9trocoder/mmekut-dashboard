import React from 'react'
import p2img from "../assets/images/p2.png";
import p3img from "../assets/images/p3.png";
import sendIcon from "../assets/Svg/send.svg";
import attachIcon from "../assets/Svg/chatadd.svg";
import { closeIcon, moreIcon } from '../Utils/tools';

function Commentcard({handleCloseComment}) {
  return (
    <div className="alternate-bar alternate-bar_res">
          <div className="alternatebarheader">
            <div
              className=""
              style={{ cursor: "pointer" }}
              onClick={handleCloseComment}
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
  )
}

export default Commentcard