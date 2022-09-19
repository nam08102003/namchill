import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import IntroduceMovie from "./views/IntroduceMovie";
import LayoutList from "./layouts/LayoutList";
import LayoutMovie from "./layouts/LayoutMovie";
import LayoutWatchFilm from "./layouts/LayoutWatchFilm";
import ViewTv from "./views/ViewTv";
import ScrollToTop from "./utils/ScrollToTop";
import MovieSeriesPage from "./pages/MovieSeriesPage";
import MovieOddPage from "./pages/MovieOddPage";
import MovieTheaterPage from "./pages/MovieTheaterPage";
import MovieNewPage from "./pages/MovieNewPage";
import MovieUpcomingPage from "./pages/MovieUpcomingPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LayoutList children={<Home />} />} />
          <Route path="/genre" element={<LayoutList children={<Home />} />} />
          <Route path="/nation" element={<LayoutList children={<Home />} />} />
          <Route
            path="/series"
            element={<LayoutList children={<MovieSeriesPage />} />}
          />
          <Route
            path="/odd"
            element={<LayoutList children={<MovieOddPage />} />}
          />
          <Route
            path="/theater"
            element={<LayoutList children={<MovieTheaterPage />} />}
          />
          <Route
            path="/upcoming"
            element={<LayoutList children={<MovieUpcomingPage />} />}
          />
          <Route
            path="/news"
            element={<LayoutList children={<MovieNewPage />} />}
          />
          <Route
            path="/search"
            element={<LayoutMovie children={<SearchPage />} />}
          />
          <Route
            path="/movie-store/:movieId"
            element={<LayoutMovie children={<IntroduceMovie />} />}
          />
          <Route
            path="/watch-movie/:params/:movieId"
            element={<LayoutWatchFilm children={<ViewTv />} />}
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
