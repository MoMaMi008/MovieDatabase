import { FC, useContext } from "react";
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
import { BookmarksContext } from "../../context/Context";
import { Link } from "react-router-dom";

interface IMovieCardProps {
  singleMovie: IMovieHome;
  inputGenre: IGenre;
}

const MovieCard: FC<IMovieCardProps> = ({ singleMovie, inputGenre }) => {
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  const { data } = useFetch<IMovieDetails>(
    getDetailsUrl(singleMovie.id),
    OPTIONS
  );
  if (!data) return "";

  const addBookmarks = () => {
    const isBookmarked = bookmarks.some(
      (bookmarkedMovie) => bookmarkedMovie.id === singleMovie.id
    );

    if (isBookmarked) {
      const sortingOut = bookmarks.filter(
        (bookmarkedMovie) => bookmarkedMovie.id !== singleMovie.id
      );
      setBookmarks(sortingOut);
    } else {
      setBookmarks([...bookmarks, singleMovie]);
    }
  };

  const isBookmarked = bookmarks.some(
    (bookmarkedMovie) => bookmarkedMovie.id === singleMovie.id
  );

  return (
    <article className="movie-card">
      {/* <Link to={`/movie/${singleMovie.id}` className="img-wrapper"}> */}{" "}
      <img
        src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
        alt={singleMovie.title}
      />
      {/* </Link> */}
      <div className="textbox-wrapper">
        <div className="card-top-textbox">
          <Link to={`/movie/${singleMovie.id}`}>
            {" "}
            <p>{singleMovie.title}</p>
          </Link>
          <button
            onClick={addBookmarks}
            className={`${
              isBookmarked ? "btn-bookmark-marked" : "btn-bookmark"
            }`}
          >
            {" "}
            <BookmarkIcon />
          </button>
        </div>
        <Link to={`/movie/${singleMovie.id}`}>
          {" "}
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
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
