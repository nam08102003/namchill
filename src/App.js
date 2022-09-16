import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import IntroduceMovie from "./views/IntroduceMovie";
import LayoutList from "./layouts/LayoutList";
import LayoutMovie from "./layouts/LayoutMovie";
import LayoutWatchFilm from "./layouts/LayoutWatchFilm";
import ViewTv from "./views/ViewTv";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LayoutList children={<Home />} />} />
          <Route path="/genre" element={<LayoutList children={<Home />} />} />
          <Route path="/nation" element={<LayoutList children={<Home />} />} />
          <Route path="/series" element={<LayoutList children={<Home />} />} />
          <Route path="/odd" element={<LayoutList children={<Home />} />} />
          <Route path="/theater" element={<LayoutList children={<Home />} />} />
          <Route
            path="/upcoming"
            element={<LayoutList children={<Home />} />}
          />
          <Route path="/news" element={<LayoutList children={<Home />} />} />
          <Route
            path="/movie-store/:movieId"
            element={<LayoutMovie children={<IntroduceMovie />} />}
          />
          <Route
            path="/watch-movie/:params/:slug"
            element={<LayoutWatchFilm children={<ViewTv />} />}
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
