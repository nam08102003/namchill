import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function WatchMovie() {
  const [video, setVideo] = useState(undefined);
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;
  const callApi = async (url) => {
    await fetch(url)
      .then((respone) => respone.json())
      .then((data) => setVideo(data.results));
  };

  useEffect(() => {
    callApi(url);
  }, []);

  const opts = {
    height: "500",
  };
  return (
    <div className="video-site grid">
      <div className="container row">
        <div className="col l-12">
          <YouTube
            videoId={video && video.length > 0 && video[0].key}
            className="form-video"
          />
        </div>
      </div>
    </div>
  );
}

export default WatchMovie;
