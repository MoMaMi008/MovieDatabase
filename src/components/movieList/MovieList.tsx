import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMovieListUrl, OPTIONS } from "../../utils/api/Api";
import { FC } from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { IGenre } from "../genreSlider/GenreSlider";
import MovieCard from "../movieCard/MovieCard";

interface IMovieListProps {
  inputGenre: IGenre;
}

const MovieList: FC<IMovieListProps> = ({ inputGenre }) => {
  const { data } = useFetch<ISearchData>(
    getMovieListUrl(inputGenre?.id),
    OPTIONS
  );

  return (
    <section className="movie-genre-list">
      {data?.results.map((singleMovie: IMovieHome) => (
        <Link to={`/details/${singleMovie.id}`} key={singleMovie.id}>
          <MovieCard singleMovie={singleMovie} inputGenre={inputGenre} />
        </Link>
      ))}
    </section>
  );
};

export default MovieList;
