import { useState } from "react";
import GenreSlider from "../../components/genreSlider/GenreSlider";
import MoviesByGenre from "../../components/moviesByGenre/MoviesByGenre";
import Searchbar from "../../components/searchbar/Searchbar";
import "./Home.css";

export interface ISearchData {
  page: number;
  results: IMovieHome[];
  total_pages: number;
  total_results: number;
}
export interface IMovieHome {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Home = () => {
  const [inputGenreId, setInputGenreId] = useState<number>(0);
  return (
    <section className="home">
      <h1>Welcome!</h1>
      <div>
        <Searchbar />
        <GenreSlider setInputGenreId={setInputGenreId} />
      </div>
      <MoviesByGenre inputGenreId={inputGenreId} />
    </section>
  );
};

export default Home;
