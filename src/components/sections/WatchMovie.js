import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { AiOutlineDown } from "react-icons/ai";
import { BiBookmarkPlus } from "react-icons/bi";

function WatchMovie() {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState(undefined);
  const [info, setInfo] = useState();
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;
  const urlInfo = `https://api.themoviedb.org/3/movie/${movieId}?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;

  const callApi = async (url, urlInfo) => {
    await fetch(url)
      .then((respone) => respone.json())
      .then((data) => setVideo(data.results));
    await fetch(urlInfo)
      .then((respone) => respone.json())
      .then((dataInfo) => setInfo(dataInfo));
  };

  useEffect(() => {
    callApi(url, urlInfo);
  }, []);

  const opts = {
    height: "500",
    width: "700",
  };

  const ChangeShow = () => {
    setShow(!show);
  };
  return (
    <div className="video-site grid">
      <div className="container">
        <div className="form-video">
          <YouTube
            videoId={video && video.length > 0 && video[0].key}
            opts={opts}
          />
        </div>
        <div className="info-movie-watching row ">
          <div className="movie-title">
            <div className="add-store">
              <BiBookmarkPlus />
            </div>
            <div className="title-main">
              <h3>{info && info.title}</h3>
              <span onClick={ChangeShow}>
                Nội dung phim
                <AiOutlineDown />
              </span>
            </div>
          </div>
          <div className={`movie-content col l-12 ${show ? "show" : ""}`}>
            <p>{info && info.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchMovie;
