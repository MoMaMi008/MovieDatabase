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
  const [movies, setMovies] = useState<IMovieHome[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const fetchUrl = shouldFetch ? getMovieListUrl(inputGenre?.id, page) : null;
  const { data } = useFetch<ISearchData>(fetchUrl, OPTIONS);

  useEffect(() => {
    if (data) {
      setMovies((prevMovies) =>
        page === 1 ? data.results : [...prevMovies, ...data.results]
      );
      setTotalPages(data.total_pages);
      setShouldFetch(false); // Disable fetch after initial load
    }
  }, [data]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setShouldFetch(true); // Enable fetch for new genre
  }, [inputGenre]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    setShouldFetch(true); // Enable fetch for next page
  };

  return (
    <section className="movie-genre-list">
      {movies.map((singleMovie: IMovieHome) => (
        <MovieCard
          singleMovie={singleMovie}
          inputGenre={inputGenre}
          key={singleMovie.id}
        />
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
