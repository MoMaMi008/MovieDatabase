import { FC } from "react";
import { IMovieHome } from "../../pages/home/Home";
import "./MovieCard.css";
import BookmarkIcon from "../../assets/SVG/BookmarkIcon";
import { IGenre } from "../genreSlider/GenreSlider";
import {
  formatRuntime,
  getReleasedYear,
} from "../../utils/functions/Functions";
import useFetch from "../../hooks/useFetch";
import { getDetailsUrl, OPTIONS } from "../../utils/api/Api";
import { IMovieDetails } from "../../pages/movieDetails/MovieDetails";

interface IMovieCardProps {
  singleMovie: IMovieHome;
  inputGenre: IGenre;
}

const MovieCard: FC<IMovieCardProps> = ({ singleMovie, inputGenre }) => {
  const { data } = useFetch<IMovieDetails>(
    getDetailsUrl(singleMovie.id),
    OPTIONS
  );

  if (!data) return "";

  return (
    <article className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
        alt={singleMovie.title}
      />
      <div className="textbox-wrapper">
        <div className="card-top-textbox">
          <p>{singleMovie.title}</p>
          <button className="btn-bookmark">
            {" "}
            <BookmarkIcon />
          </button>
        </div>
        <div className="card-bottom-textbox">
          <p className="text-rate">⭐{singleMovie.vote_average.toFixed(1)}</p>

          {isNaN(getReleasedYear(singleMovie.release_date)) ? (
            ""
          ) : (
            <p>{getReleasedYear(singleMovie.release_date)}</p>
          )}

          <p>{inputGenre?.name} </p>
          <p>{formatRuntime(data?.runtime)}</p>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
