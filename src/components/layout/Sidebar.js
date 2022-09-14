import React, { useEffect, useState } from "react";
import TopMovie from "../sections/TopMovie";
import TrendMovies from "../sections/TopTrend";
import TrailerMovies from "../sections/TopTrailer";

function Sidebar() {
  const classNameTrend = "top-trend";
  const classNameTrailer = "top-trailer";
  console.log(TrailerMovies);
  return (
    <>
      <TopMovie className={classNameTrend} title="Top" movies={TrendMovies} />
      <TopMovie
        className={classNameTrailer}
        title="Trailer"
        movies={TrailerMovies}
      />
    </>
  );
}

export default Sidebar;
