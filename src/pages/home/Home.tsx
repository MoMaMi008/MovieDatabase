import { FC } from "react";
import GenreSlider from "../../components/genreSlider/GenreSlider";

import Searchbar from "../../components/searchbar/Searchbar";
import "./Home.css";

interface IHomeProps {
  setInputGenreId: React.Dispatch<React.SetStateAction<number>>;
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

const Home: FC<IHomeProps> = ({ setInputGenreId }) => {
  return (
    <section className="home">
      <h1>Welcome!</h1>
      <div>
        <Searchbar />
        <GenreSlider setInputGenreId={setInputGenreId} />
      </div>
    </section>
  );
};

export default Home;
