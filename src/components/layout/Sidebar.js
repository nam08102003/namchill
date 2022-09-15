import React, { useEffect, useState } from "react";
import TopTrailer from "../sections/TopTrailer";
import TopTrend from "../sections/TopTrend";

function Sidebar() {
  return (
    <>
      <TopTrend />
      <TopTrailer />
    </>
  );
}

export default Sidebar;
