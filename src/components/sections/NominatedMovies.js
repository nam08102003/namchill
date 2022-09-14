import React from "react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";

function NominatedMovies() {
  const sliderRef = useRef();
  const [movies, setMovies] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoPlay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
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
        <div className="section-title row">
          <span>Phim đề cử</span>
        </div>
        <div className="slider-movie grid wide">
          <button className="arrow-btn previous-btn" onClick={gotoPrevious}>
            <GrFormPrevious />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {movies &&
              movies.map((movie, index) => {
                return (
                  <div className="movie-item" key={index}>
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
                  </div>
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
