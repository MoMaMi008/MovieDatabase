import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMovieListUrl, OPTIONS } from "../../utils/api/Api";
import { FC, useEffect, useState } from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { IGenre } from "../genreSlider/GenreSlider";
import MovieCard from "../movieCard/MovieCard";

interface IMovieListProps {
  inputGenre: IGenre;
}

const MovieList: FC<IMovieListProps> = ({ inputGenre }) => {
  // ^============== for the function, "LOAD MORE button"
  const [movies, setMovies] = useState<IMovieHome[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const { data } = useFetch<ISearchData>(
    getMovieListUrl(inputGenre?.id, page),
    OPTIONS
  );

  useEffect(() => {
    if (data) {
      setMovies((prevMovies) =>
        page === 1 ? data.results : [...prevMovies, ...data.results]
      );
      setTotalPages(data.total_pages);
    }
  }, [data, page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [inputGenre]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="movie-genre-list">
      {movies.map((singleMovie: IMovieHome) => (
        <Link to={`/movie/${singleMovie.id}`} key={singleMovie.id}>
          <MovieCard singleMovie={singleMovie} inputGenre={inputGenre} />
        </Link>
      ))}
      {page < totalPages && (
        <button onClick={loadMoreMovies} className="load-more-button">
          Load More
        </button>
      )}
    </section>
  );
};

export default MovieList;
