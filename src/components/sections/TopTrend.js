import React, { useState, useEffect } from "react";
import TopMovie from "./TopMovie";

function TopTrend() {
  const [listmovie, setlistmovie] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=2";
  const url2 =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=3";
  const callApi = async (url, url2) => {
    const respone = await fetch(url);
    const respone2 = await fetch(url2);
    const data = await respone.json();
    const data2 = await respone2.json();
    setlistmovie(data.results.concat(data2.results));
  };
  useEffect(() => {
    callApi(url, url2);
  }, []);

  return (
    <div className="top-trend-movie">
      <TopMovie title="Top" movies={listmovie} trailer={false} time={true} />
    </div>
  );
}

export default TopTrend;
