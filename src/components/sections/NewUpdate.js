import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import ListMovie from "./ListMovie";
function NewUpdate() {
  const [newMovies, setNewMovies] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=1";
  const callApi = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let sliceData = data.results.slice(0, 12);
        setNewMovies(sliceData);
      });
  };
  useEffect(() => {
    callApi(url);
  }, []);
  return (
    <div className="new-update grid wide">
      <div className="container">
        <div className="section-title row">
          <div className="title col l-7 m-7 c-7">
            <span>Mới cập nhật</span>
          </div>
          <div className="see-all col l-5 m-5 c-5">
            <button className="see-all-btn">
              Xem Thêm
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="list-movies row no-gutters">
          <ListMovie movies={newMovies} />
        </div>
      </div>
    </div>
  );
}

export default NewUpdate;
