import { useContext } from "react";
import "./BookmarkList.css";
import { BookmarksContext, InputGenreContext } from "../../context/Context";
import { IMovieHome } from "../../pages/home/Home";

import MovieCard from "../movieCard/MovieCard";
const BookmarkList = () => {
  const { bookmarks } = useContext(BookmarksContext);
  const { inputGenre } = useContext(InputGenreContext);

  return (
    <section className="bookmark-list">
      {" "}
      {bookmarks.map((singleMovie: IMovieHome) => (
        <MovieCard
          singleMovie={singleMovie}
          inputGenre={inputGenre}
          key={singleMovie.id}
        />
      ))}
    </section>
  );
};

export default BookmarkList;
