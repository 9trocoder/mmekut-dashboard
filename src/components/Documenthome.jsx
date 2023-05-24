import React from "react";
import { arrowright } from "../Utils/tools";
import { useState } from "react";

function Documenthome({ homearrow, handledisplay }) {
  const [activeheaderbtn, setactiveheaderbtn] = useState("btn-1");
  const documentheaderbtnlist = [
    {
      id: "btn-1",
      title: "All",
    },
    {
      id: "btn-2",
      title: "Assigned",
    },
    {
      id: "btn-3",
      title: "Shared",
    },
    {
      id: "btn-4",
      title: "Private",
    },
  ];
  return (
    <div className='page-content'>
      <div className='homeheader'>
        <div className='homeheaderleft'>
          <div
            style={{ display: `${homearrow}` }}
            className='home_headericon'
            onClick={handledisplay}
          >
            {arrowright}
          </div>
          <label className='homeheader_title'>Documents</label>
        </div>

        <div className='homeheaderright'>
          {documentheaderbtnlist.map((dhbtnlist, index) => (
            <button
              className={
                activeheaderbtn === dhbtnlist.id
                  ? "homeheaderrightbtnactive"
                  : "homeheaderrightbtnnotactive"
              }
              key={index}
              onClick={() => setactiveheaderbtn(dhbtnlist.id)}
            >
              {dhbtnlist.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documenthome;
