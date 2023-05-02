import React, { useRef } from "react";

function AddtaskAccordionItem({ list, active, onToggle }) {
  const { title, cards } = list;
  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className='acbutton' onClick={onToggle}>
        {" "}
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
            <li className='showaccordionlist' key={index}>
              <p className='showaccordionlistitem'>{lst.title}</p>
            </li>
          ))}
          <input
            type='text'
            placeholder='Create a new Card'
            className='showaccordiontextfill'
          />
        </div>
      </div>
    </li>
  );
}

export default AddtaskAccordionItem;
