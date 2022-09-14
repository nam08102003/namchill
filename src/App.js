import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LayoutList from "./layouts/LayoutList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutList children={<Home />} />} />
        <Route path="/genre" element={<LayoutList children={<Home />} />} />
        <Route path="/nation" element={<LayoutList children={<Home />} />} />
        <Route path="/series" element={<LayoutList children={<Home />} />} />
        <Route path="/odd" element={<LayoutList children={<Home />} />} />
        <Route path="/theater" element={<LayoutList children={<Home />} />} />
        <Route path="/upcoming" element={<LayoutList children={<Home />} />} />
        <Route path="/news" element={<LayoutList children={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
