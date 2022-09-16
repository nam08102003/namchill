import React from "react";

function PluginComment() {
  const url = "https://www.themoviedb.org";
  return (
    <div
      className="fb-comments plugin-facebook"
      data-href={url}
      data-width="100%"
      data-numposts="5"
      data-colorscheme="light"
    ></div>
  );
}

export default PluginComment;
