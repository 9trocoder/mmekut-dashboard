import React, { useRef, useState } from "react";

function AddtaskAccordionItem({ list, active, onToggle }) {
  const [showaddcard, setshowaddcard] = useState(false);
  const { title, cards } = list;
  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className='acbutton' onClick={onToggle}>
        <span className='accontrol'>{active ? "-" : "+"}</span>
        <p className='actitle'>{title}</p>
      </button>

      <div
        ref={contentEl}
        className={`accordion_show ${active ? "open" : ""}`}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className='showaccordion'>
          {cards.map((lst, index) => (
            <button className='showaccordionlist' key={index}>
              <p className='showaccordionlistitem'>{lst.title}</p>
            </button>
          ))}

          <div className='showaccordionbutton'>
            {!showaddcard && (
              <button onClick={() => setshowaddcard(true)} className='sabtop'>
                <span>+</span>
                <p className='actitle'>Create a new card</p>
              </button>
            )}
          </div>
          {showaddcard && (
            <input
              type='text'
              placeholder='Enter card name'
              className='showaccordiontextfill'
            />
          )}
        </div>
      </div>
    </li>
  );
}

export default AddtaskAccordionItem;
