import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  url,
  title,
  year,
  rating,
  genres,
  summary,
  mediumPosterUrl,
  largePosterUrl,
}) {
  return (
    <div className="movies__movie">
      <Link
        to={{
          pathname: `/movie`,
          state: {
            url,
            title,
            year,
            rating,
            genres,
            summary,
            mediumPosterUrl,
            largePosterUrl,
          },
        }}
      >
        <img
          className="movie__posterUrl"
          src={mediumPosterUrl}
          alt={title}
        ></img>
        <div className="movie__title">{title}</div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  posterUrl: PropTypes.string,
};

export default Movie;
