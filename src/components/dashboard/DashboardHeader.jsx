import React from 'react';
import "./index.css";

function DashboardHeader({dashboardheaderel}) {
  return (
    <>
        <div className="dashboardheader">
            <div className="dashboardheaderwidth">
                {dashboardheaderel}
            </div>
            
        </div>
    </>
  )
}

export default DashboardHeader