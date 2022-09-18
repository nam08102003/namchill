import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";

function InformationMovie() {
  const [film, setFilm] = useState({});
  const [director, setDirector] = useState([]);
  const [actor, setActor] = useState([]);
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;
  const urlCredit = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US`;

  const callApi = async (url, urlCredit) => {
    await fetch(url)
      .then((respone) => respone.json())
      .then((data) => {
        setFilm(data);
      });

    await fetch(urlCredit)
      .then((respone) => respone.json())
      .then((data2) => {
        setDirector(() => {
          return (
            data2 &&
            data2.crew &&
            data2.crew
              .filter((item) => item.known_for_department === "Directing")
              .slice(0, 1)
          );
        });
        setActor(() => {
          return (
            data2 &&
            data2.cast &&
            data2.cast
              .filter((item) => item.known_for_department === "Acting")
              .slice(0, 4)
          );
        });
      });
  };

  useEffect(() => {
    callApi(url, urlCredit);
  }, []);

  return (
    <div className="information-movie-site">
      <div className="container grid">
        <div className="introduce-film row">
          <div className="film-poster col l-4 m-4">
            <div className="film-poster-main">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt={film.original_title}
              />
            </div>
            <div className="select-button-group">
              <button className="select-episode-button">Chọn tập</button>
              <Link
                to={`/watch-movie/${
                  film &&
                  film.title &&
                  film.title
                    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
                    .replace(/\s/g, "")
                }/${film.id}`}
                className="watch-button"
              >
                <BsPlayFill />
                Xem Phim
              </Link>
            </div>
            <div className="film-trailer">
              <button>Trailer</button>
            </div>
          </div>
          <div className="film-detail col l-8 m-8">
            <h1 className="film-title">{film.title}</h1>
            <p className="status">
              Trạng thái: <span>HD VietSub + Thuyết Minh</span>
            </p>
            <p className="runtime">
              Thời gian: <span>{film.runtime} phút</span>
            </p>
            <p className="language">
              Ngôn ngữ: <span>Phụ đề việt, Thuyết minh</span>
            </p>
            <p className="category">
              Thể loại:
              <span>
                {film.genres &&
                  film.genres.length > 0 &&
                  film.genres.map((item) => item.name).toString()}
              </span>
            </p>
            <p className="country">
              Quốc gia:{" "}
              <span>
                {film.production_countries &&
                  film.production_countries.length > 0 &&
                  film.production_countries[0].name}
              </span>
            </p>
            <p className="director">
              Đạo diễn:
              <span>
                {director &&
                  director.length > 0 &&
                  director.map((item) => item.name)}
              </span>
            </p>
            <p className="actor">
              Diễn viên:{" "}
              <span>
                {actor &&
                  actor.length > 0 &&
                  actor.map((item) => item.name).toString()}
              </span>
            </p>
            <p className="year">
              Năm:
              <span>{film.release_date && film.release_date.slice(0, 4)}</span>
            </p>
          </div>
        </div>
        <div className="content-film">
          <div className="container">
            <div className="section-title">
              <div className="title">
                <span>Nội dung phim</span>
              </div>
            </div>
            <div className="content-film-main">
              <p>{film && film.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationMovie;
