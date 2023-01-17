import React from 'react'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardLayout from '../../layout/DashboardLayout'

const dashboardheaderel = <div style={{display: "flex", justifyContent: "space-between"}}><p></p>
<p></p>
</div> 

const nav = <p></p>
const bodyel = <>
  <div className="">
    <DashboardHeader dashboardheaderel={dashboardheaderel} />
  </div>
</>


function Homepage() {
  return (
    <>
        <div className="">
            <DashboardLayout navbarelement={nav} bodyelement={bodyel} />
        </div>
    </>
  )
}

export default Homepage