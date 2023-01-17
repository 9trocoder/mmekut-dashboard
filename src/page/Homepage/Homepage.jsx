import React from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardLayout from "../../layout/DashboardLayout";

function Homepage() {
  const dashboardheaderel = (
    <div>
      <p></p>
      <p></p>
    </div>
  );

  const nav = <p></p>;
  const bodyel = (
    <>
      <div className="">
        <DashboardHeader dashboardheaderel={dashboardheaderel} />
      </div>
    </>
  );
  return (
    <>
      <div className="">
        <DashboardLayout navbarelement={nav} bodyelement={bodyel} />
      </div>
    </>
  );
}

export default Homepage;
