import React from 'react';
import "./index.css";

function Navbar({navelement}) {
  return (
    <>
        <div className="navbar">
            {navelement}
        </div>
    </>
  )
}

export default Navbar