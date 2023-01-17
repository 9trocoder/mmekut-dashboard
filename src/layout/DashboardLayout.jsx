import React from 'react'
import BodyLayout from '../components/dashboard/BodyLayout'
import Navbar from '../components/dashboard/Navbar'




function DashboardLayout({navbarelement, bodyelement}) {
  return (
    <>
        <div className="dashboardlayout">
            <Navbar navelement= {navbarelement} />
            <BodyLayout bodyelement = {bodyelement} />
        </div>
    </>
  )
}

export default DashboardLayout