import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMoviesByGenreUrl, OPTIONS } from "../../utils/api/Api";
import MiniMovieCard from "../miniMovieCard/MiniMovieCard";
import { FC } from "react";
import "./MoviesByGenre.css";
import { Link } from "react-router-dom";

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
        <Link to={"/details"} key={singleMovie.id}>
          <MiniMovieCard singleMovie={singleMovie} />
        </Link>
      ))}
    </section>
  );
};

export default MoviesByGenre;
