import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMoviesByGenreUrl, OPTIONS } from "../../utils/api/Api";
import MiniMovieCard from "../miniMovieCard/MiniMovieCard";
import { FC } from "react";

interface IMoviesByGenreProps {
  inputGenreId: number;
}

const MoviesByGenre: FC<IMoviesByGenreProps> = ({ inputGenreId }) => {
  const moviesByGenreData = useFetch<ISearchData>(
    getMoviesByGenreUrl("en-US", inputGenreId),
    OPTIONS
  );
  console.log(moviesByGenreData);

  return (
    <section>
      {moviesByGenreData.data?.results.map((singleMovie: IMovieHome) => (
        <p key={singleMovie.id}>{singleMovie.title}</p>
      ))}
    </section>
  );
};

export default MoviesByGenre;
