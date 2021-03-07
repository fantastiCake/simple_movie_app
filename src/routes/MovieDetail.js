import React from "react";
import "./MovieDetail.css";

function MovieDetail({ history, location: { state } }) {
  if (!state) {
    history.push("/");
    return null;
  } else {
    const { url, title, year, rating, genres, summary, largePosterUrl } = state;
    return (
      <div className="movie-detail">
        <div className="movie-detail__movie">
          <div className="movie__info-box">
            <div className="movie__title-big">{title}</div>
            <div className="movie__title">{title}</div>
            <div className="movie__year-rating-genres-box">
              <div className="movie__year">{year}</div>
              <span>|</span>
              <div className="movie__rating">{rating}</div>
              <span>|</span>
              <div className="movie__genres">
                {genres.map((genre, index) => (
                  <div key={index} className="genre">
                    {genre}
                  </div>
                ))}
              </div>
            </div>
            <div className="movie__summary">{summary}</div>
            <a
              href={url}
              className="movie__link"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
          </div>
          <a href={url} target="_blank" rel="noreferrer" className="movie__poster-container">
            <img
              className="movie__posterUrl"
              src={largePosterUrl}
              alt={title}
              title={title}
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
