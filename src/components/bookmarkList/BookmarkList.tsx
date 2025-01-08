import { useContext } from "react";
import "./BookmarkList.css";
import { BookmarksContext, InputGenreContext } from "../../context/Context";
import { IMovieHome } from "../../pages/home/Home";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
const BookmarkList = () => {
  const { bookmarks } = useContext(BookmarksContext);
  const { inputGenre } = useContext(InputGenreContext);

  return (
    <section className="bookmark-list">
      {" "}
      {bookmarks.map((singleMovie: IMovieHome) => (
        <Link to={`/movie/${singleMovie.id}`} key={singleMovie.id}>
          <MovieCard singleMovie={singleMovie} inputGenre={inputGenre} />
        </Link>
      ))}
    </section>
  );
};

export default BookmarkList;
