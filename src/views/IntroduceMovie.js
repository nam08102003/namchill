import React from "react";
import InformationMovie from "../components/sections/InformationMovie";
import Sidebar from "../components/layout/Sidebar";
import PluginComment from "../components/sections/PluginComment";

function IntroduceMovie() {
  return (
    <div className="grid wide">
      <div className="container">
        <div className="row">
          <div className="col l-8">
            <InformationMovie />
            <PluginComment />
          </div>
          <div className="col l-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceMovie;
