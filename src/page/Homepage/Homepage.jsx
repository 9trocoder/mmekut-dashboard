import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout'

const nav = <p>Hello nav</p>
const bodyel = <p>Hello body</p>


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