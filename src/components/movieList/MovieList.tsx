import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMovieListUrl, OPTIONS } from "../../utils/api/Api";

import { FC } from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { IGenre } from "../genreSlider/GenreSlider";
import MovieCard from "../movieCard/MovieCard";

interface IMovieListProps {
  inputGenre: IGenre | null;
}

const MovieList: FC<IMovieListProps> = ({ inputGenre }) => {
  const movieListData = useFetch<ISearchData>(
    getMovieListUrl("en-US", inputGenre?.id),
    OPTIONS
  );
  console.log("movieListData", movieListData);

  return (
    <section className="movie-genre-list">
      {movieListData.data?.results.map((singleMovie: IMovieHome) => (
        <Link to={"/details"} key={singleMovie.id}>
          <MovieCard singleMovie={singleMovie} />
        </Link>
      ))}
    </section>
  );
};

export default MovieList;
