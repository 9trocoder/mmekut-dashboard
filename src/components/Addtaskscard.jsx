import React, { useState } from "react";
import { closeIcon, closeicon, peopleAddIcon } from "../Utils/tools";
import AddtaskAccordionItem from "./AddtaskAccordionItem";

function Addtaskscard() {
  const [clicked, setClicked] = useState("0");
  const [addtaskshow, setaddtaskshow] = useState(false);
  const [showfor, setshowfor] = useState(false);
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  const addtaskicon = (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z'
        fill-rule='evenodd'
        clip-rule='evenodd'
      ></path>
    </svg>
  );

  const addtaskaccordlist = [
    {
      id: 1,
      title: "Design",
      cards: [
        { id: 1, title: "Dashboard UI" },
        {
          id: 2,
          title: "Landing page UI",
        },
      ],
    },
  ];

  return (
    <>
      <div className='addtaskcard_button'>
        <button className='addtaskcardbtn' onClick={() => setaddtaskshow(true)}>
          {addtaskicon}
          New task
        </button>

        {addtaskshow && (
          <>
            <div
              className='addtakscardoverlay'
              onClick={() => {
                setshowfor(false);
                setaddtaskshow(false);
              }}
            />
            <div className='addtakscardbody'>
              <div className='addtakscardbodycnt'>
                <div className='addtcbctop'>
                  <div className='addtcbctopleft'>
                    <textarea
                      rows={1}
                      type='text'
                      autoFocus={true}
                      placeholder='Make a summary of your task...'
                      className='addtcbctopletinput'
                    />
                  </div>
                  <div className='addtcbctopright'>
                    <div
                      className='addtcbctoprightclosebtn'
                      onClick={() => {
                        setshowfor(false);
                        setaddtaskshow(false);
                        setClicked("0");
                      }}
                    >
                      {closeicon}
                    </div>
                  </div>
                </div>
                <div className='addtcbcfor'>
                  <div className='addtcbcforproject'>
                    <p className='addtcbcforprojecttitle'>For</p>
                    <div
                      className='addtcbforprojectadd'
                      onClick={() => setshowfor(true)}
                    >
                      {addtaskicon}
                    </div>
                    {showfor && (
                      <>
                        <div
                          className='addtcbforcntoverlay'
                          onClick={() => {
                            setshowfor(false);
                            setClicked("0");
                          }}
                        />
                        <div className='addtcbforcnt'>
                          <ul className='addtchcaccordingcnt'>
                            {addtaskaccordlist.map((list, index) => (
                              <AddtaskAccordionItem
                                onToggle={() => handleToggle(index)}
                                key={index}
                                list={list}
                                active={clicked === index}
                              />
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                  <div className='addtcbcforproject'>
                    <p className='addtcbcforprojecttitle'>Assign to</p>
                    <div className='addtcbforprojectassign'>
                      {peopleAddIcon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Addtaskscard;
