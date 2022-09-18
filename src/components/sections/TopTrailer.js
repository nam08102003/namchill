import React, { useState, useEffect } from "react";
import TopMovie from "./TopMovie";

function TopTrailer() {
  const [listmovie, setlistmovie] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=2";
    const callApi = async () => {
      const respone = await fetch(url);
      const data = await respone.json();
      let sliceData = data.results.slice(0, 10);
      setlistmovie(sliceData);
    };

    callApi();
  }, []);

  return (
    <div className="top-trailer-movie">
      <TopMovie
        title="Phim sắp chiếu"
        movies={listmovie}
        trailer={true}
        time={false}
      />
    </div>
  );
}

export default TopTrailer;
