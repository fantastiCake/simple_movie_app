import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const MOVIE_API =
  "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  async componentDidMount() {
    const response = await axios(MOVIE_API);
    this.setState({ isLoading: false, movies: response.data.data.movies });
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="home">
        {isLoading ? (
          <div className="home__loader">loading...</div>
        ) : (
          <div className="home__title-movies-box">
            <h1 className="home__title">Movies</h1>
            <div className="home__movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    url={movie.url}
                    title={movie.title}
                    rating={movie.rating}
                    year={movie.year}
                    genres={movie.genres}
                    summary={movie.summary}
                    mediumPosterUrl={movie.medium_cover_image}
                    largePosterUrl={movie.large_cover_image}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
