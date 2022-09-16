import React from "react";
import NominatedMovies from "../components/sections/NominatedMovies";
import NewUpdate from "../components/sections/NewUpdate";
import MovieTheater from "../components/sections/MovieTheater";
import NewSeriesMovie from "../components/sections/NewSeriesMovie";
import NewOddMovie from "../components/sections/NewOddMovie";
import Sidebar from "../components/layout/Sidebar";
import IntroduceWeb from "../components/sections/IntroduceWeb";
import ScrollToTop from "../utils/ScrollToTop";
function Home() {
  return (
    <ScrollToTop>
      <NominatedMovies />
      <NewUpdate />
      <MovieTheater />
      <div className="grid wide">
        <div className="container">
          <div className="row">
            <div className="col l-8">
              <NewSeriesMovie />
              <NewOddMovie />
              <IntroduceWeb />
            </div>
            <div className="col l-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Home;
