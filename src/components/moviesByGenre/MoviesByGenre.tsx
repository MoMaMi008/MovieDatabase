import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMoviesByGenreUrl, OPTIONS } from "../../utils/api/Api";
import MiniMovieCard from "../miniMovieCard/MiniMovieCard";
import { FC } from "react";
import "./MoviesByGenre.css";

interface IMoviesByGenreProps {
  inputGenreId: number;
}

const MoviesByGenre: FC<IMoviesByGenreProps> = ({ inputGenreId }) => {
  const moviesByGenreData = useFetch<ISearchData>(
    getMoviesByGenreUrl("en-US", inputGenreId),
    OPTIONS
  );
  console.log("moviesByGenreData", moviesByGenreData);

  return (
    <section className="movie-genre-list">
      {moviesByGenreData.data?.results.map((singleMovie: IMovieHome) => (
        <MiniMovieCard key={singleMovie.id} singleMovie={singleMovie} />
      ))}
    </section>
  );
};

export default MoviesByGenre;
