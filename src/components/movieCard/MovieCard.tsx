import { FC } from "react";
import { IMovieHome } from "../../pages/home/Home";
import "./MovieCard.css";
import BookmarkIcon from "../../assets/SVG/BookmarkIcon";
import { IGenre } from "../genreSlider/GenreSlider";

interface IMovieCardProps {
  singleMovie: IMovieHome;
  inputGenre: IGenre | null;
}

const MovieCard: FC<IMovieCardProps> = ({ singleMovie, inputGenre }) => {
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

          {isNaN(new Date(singleMovie.release_date).getFullYear()) ? (
            ""
          ) : (
            <p>{new Date(singleMovie.release_date).getFullYear()}</p>
          )}

          <p>{inputGenre?.name} </p>
          <p>2h 38m</p>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
