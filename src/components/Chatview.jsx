import React from 'react'
import p1img from "../assets/images/p1.png";
import { closeIcon, jother, searchBig } from '../Utils/tools';
import Leftchat from './Leftchat';

function Chatview({handlechatviewclose, handlechatresoursclick}) {
  return (
    <div className="chatview-bar chatview-bar_res">
        <div className="chatviewheader">
            <div className="chatviewheader-left">
                <div className="chatviewheader-left1">
                    <div className="rightbarclose"
                    onClick={handlechatviewclose}
                    >
                        {closeIcon}
                    </div>
                    <img src={p1img} alt="" />
                </div>
                
            </div>
            <div className="chatviewheader-right">
                <div className="chatmoreicon">
                    {searchBig}
                </div>
                <div className="chatmoreicon">
                    {jother}
                </div>
            </div>
        </div>
        <div className="chatviewwrapper">
            <Leftchat message="Hello, we have a meeting by 10" msgtime="11:45 PM" />
        </div>
    </div>
  )
}

export default Chatview