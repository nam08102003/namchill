import React from "react";
import InformationMovie from "../components/sections/InformationMovie";
import Sidebar from "../components/layout/Sidebar";
import PluginComment from "../components/sections/PluginComment";
import WatchMore from "../components/sections/WatchMore";

function WatchFilm() {
  return (
    <div className="grid wide">
      <div className="container">
        <div className="row">
          <div className="col l-8">
            <InformationMovie />
            <PluginComment />
            <WatchMore />
          </div>
          <div className="col l-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchFilm;
