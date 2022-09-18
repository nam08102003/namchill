import React from "react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NominatedMovies() {
  const sliderRef = useRef();
  const [movies, setMovies] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=1";
  const callApi = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  useEffect(() => {
    callApi(url);
  }, []);

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrevious = () => {
    sliderRef.current.slickPrev();
  };

  // console.log(movies);
  return (
    <div className="nominated-movies grid wide">
      <div className="container">
        <div className="section-title">
          <div className="title">
            <span>Phim đề cử</span>
          </div>
        </div>
        <div className="slider-movie grid wide">
          <button className="arrow-btn previous-btn" onClick={gotoPrevious}>
            <GrFormPrevious />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {movies &&
              movies.map((movie, index) => {
                return (
                  <Link
                    to={`/movie-store/${movie.id}`}
                    className="movie-item"
                    key={index}
                  >
                    <div className="movie-img">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="movie-info">
                      <div className="movie-name">
                        <h2>{movie.title}</h2>
                      </div>
                      <div className="movie-status">
                        <span>HD Vietsub + TM</span>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <div className="action-btn">
                      <span className="play-btn">
                        <BsFillPlayFill />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </Slider>
          <button className="arrow-btn next-btn" onClick={gotoNext}>
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NominatedMovies;
