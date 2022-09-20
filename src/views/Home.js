import React, { useState, useEffect } from "react";
import NominatedMovies from "../components/sections/NominatedMovies";
import NewUpdate from "../components/sections/NewUpdate";
import MovieTheater from "../components/sections/MovieTheater";
import NewSeriesMovie from "../components/sections/NewSeriesMovie";
import NewOddMovie from "../components/sections/NewOddMovie";
import Sidebar from "../components/layout/Sidebar";
import IntroduceWeb from "../components/sections/IntroduceWeb";
import ScrollToTop from "../utils/ScrollToTop";

const getWidthWindow = () => {
  const { innerWidth: width } = window;
  return width;
};

function Home() {
  const [width, setWidth] = useState(getWidthWindow());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidthWindow());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <ScrollToTop>
      <NominatedMovies />
      <NewUpdate />
      <MovieTheater />
      <div className="grid wide">
        <div className="container">
          <div className="row no-gutters">
            {width <= 480 ? (
              <>
                <div className="col l-8 m-8 c-12">
                  <NewSeriesMovie />
                  <NewOddMovie />
                  <Sidebar />
                </div>
                <div className="col l-4 m-4 c-12">
                  <IntroduceWeb />
                </div>
              </>
            ) : (
              <>
                <div className="col l-8 m-8 c-12">
                  <NewSeriesMovie />
                  <NewOddMovie />
                  <IntroduceWeb />
                </div>
                <div className="col l-4 m-4 c-12">
                  <Sidebar />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}

export default Home;
