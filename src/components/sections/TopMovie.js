import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function TopMovie({ title, movies, trailer, time }) {
  const [select, setSelect] = useState();
  const [list, setList] = useState([]);
  const buttonRef = useRef();

  useEffect(() => {
    const clickButton = setTimeout(() => {
      buttonRef && buttonRef.current && buttonRef.current.click();
    }, 500);

    return () => {
      clearTimeout(clickButton);
    };
  }, []);

  useEffect(() => {
    select && select.classList.add("active");
    return () => {
      select && select.classList.remove("active");
    };
  }, [select]);

  const ChangeSelect = (e, start, end) => {
    setSelect(e.target.parentElement);
    setList(movies.slice(start, end));
    buttonRef.current.classList.remove("active");
  };

  return (
    <div className="top-movie">
      <div className="container">
        <div className="section-title grid">
          <div className="title row no-gutters">
            <span
              className={`${time ? "col l-4 m-3 c-3" : "col l-12 m-12 c-12"}`}
            >
              {title}
            </span>
            {time && (
              <div className="select-time col l-8 m-9 c-9">
                <ul className="row">
                  <li onClick={(e) => ChangeSelect(e, 0, 10)}>
                    <button ref={buttonRef} className="active">
                      Ngày
                    </button>
                  </li>
                  <li onClick={(e) => ChangeSelect(e, 10, 20)}>
                    <button>Tuần</button>
                  </li>
                  <li onClick={(e) => ChangeSelect(e, 20, 30)}>
                    <button>Tháng</button>
                  </li>
                  <li onClick={(e) => ChangeSelect(e, 30, 40)}>
                    <button>Tất cả</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="list-movies grid">
            {trailer ? (
              <>
                {movies &&
                  movies.map((movie, index) => {
                    return (
                      <Link to={`/movie-store/${movie.id}`} key={index}>
                        <div className="movie-item row no-gutters">
                          <div className="movie-img col l-4 m-4">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                              alt={movie.title}
                            />
                            <div className="movie-status">
                              {trailer === true ? <span>Trailer</span> : ""}
                            </div>
                          </div>
                          <div className="movie-info col l-8 m-8">
                            <h3 className="name-vi">{movie.title}</h3>
                            <h3 className="name-eg">{movie.title}</h3>
                            <span className="seed">10 lượt xem</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            ) : (
              <>
                {list &&
                  list.map((movie, index) => {
                    return (
                      <Link to={`/movie-store/${movie.id}`} key={index}>
                        <div className="movie-item row no-gutters">
                          <div className="movie-img col l-4 m-4">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                              alt={movie.title}
                            />
                            <div className="movie-status">
                              {trailer === true ? <span>Trailer</span> : ""}
                            </div>
                          </div>
                          <div className="movie-info col l-8 m-8">
                            <h3 className="name-vi">{movie.title}</h3>
                            <h3 className="name-eg">{movie.title}</h3>
                            <span className="seed">10 lượt xem</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovie;
