import { FC } from "react";
import GenreSlider, { IGenre } from "../../components/genreSlider/GenreSlider";

import Searchbar from "../../components/searchbar/Searchbar";
import "./Home.css";
import TrendingMovies from "../../components/trendingMovies/TrendingMovies";
import Footer from "../../components/footer/Footer";

interface IHomeProps {
  setInputGenre: React.Dispatch<React.SetStateAction<IGenre>>;
}

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

const Home: FC<IHomeProps> = ({ setInputGenre }) => {
  return (
    <section className="home">
      <h1>Welcome!</h1>
      <div>
        <Searchbar />
        <GenreSlider setInputGenre={setInputGenre} />
      </div>
      <TrendingMovies />
      <Footer />
    </section>
  );
};

export default Home;
