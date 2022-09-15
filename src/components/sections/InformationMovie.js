import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function InformationMovie() {
  const [film, setFilm] = useState([]);
  const filmId = useParams();

  const url = `https://api.themoviedb.org/3/movie/${filmId.slug}?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;

  const callApi = async (url) => {
    await fetch(url)
      .then((respone) => respone.json())
      .then((data) => {
        setFilm(data);
      });
  };

  useEffect(() => {
    callApi(url);
  }, []);

  // console.log(film && film.genres.length > 0 && film.genres.name);

  return (
    <div className="information-movie-site">
      <div className="container">
        <div className="introduce-film">
          <div className="film-poster">
            <div className="film-poster-main">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt={film.original_title}
              />
            </div>
            <div className="select-button-group">
              <button className="select-episode-button">Chọn tập</button>
              <Link to={`watch-movie/${film.title}`} className="watch-button">
                Xem Phim
              </Link>
            </div>
            <div className="film-trailer">
              <button>Trailer</button>
            </div>
          </div>
          <div className="film-detail">
            <h1 className="film-title">{film.title}</h1>
            <p className="status">
              Trạng thái: <span>HD VietSub + Thuyết Minh</span>
            </p>
            <p className="runtime">
              Thời gian: <span>{film.runtime}</span>
            </p>
            <p className="language">
              Ngôn ngữ: <span>Phụ đề việt, Thuyết minh</span>
            </p>
            <p className="category">
              Thể loại:
              {/* <span>{film && film.genres.length > 0 && film.genres.name}</span> */}
            </p>
            <p className="country">
              {/* Quốc gia: <span>{film.production_countries}</span> */}
            </p>
            {/* <p className="director">
              Đạo diễn:{" "}
              <span>
                {director.map((item) => {
                  return { item };
                })}
              </span>
            </p>
            <p className="actor">
              Diễn viên:{" "}
              {actor.map((item, index) => {
                return <span key={index}>{item.name},</span>;
              })}
            </p> */}
            <p className="year">
              {/* Năm: <span>{film.release_date.slice(0, 4)}</span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationMovie;
