import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import MediaCard from "./MediaCard";
// import { movies } from "../data/Moviesdata";
import axios from "axios";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const getAllMovies = async (req, res) => {
    try {
      const { data } = await axios.get("/api/v1/movie/all-movies");

      if (data?.success) {
        setMovies(data.movies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <button type="button" className="slick-prev"></button>, // Default previous arrow
    nextArrow: <button type="button" className="slick-next"></button>, // Default next arrow
  };

  return (
    <>
      <div className="amazon-carousel-container">
        <Slider {...settings}>
          {movies.map((movie, id) => {
            return (
              <MediaCard
                Poster={movie.Poster}
                Title={movie.Title}
                Plot={movie.Plot}
                id={movie._id}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
