import { FC } from "react";
import GenreSlider, { IGenre } from "../../components/genreSlider/GenreSlider";

import Searchbar from "../../components/searchbar/Searchbar";
import "./SearchPage.css";
import MovieList from "../../components/movieList/MovieList";

interface ISearchPageProps {
  inputGenre: IGenre | null;
  setInputGenre: React.Dispatch<React.SetStateAction<IGenre | null>>;
}
const SearchPage: FC<ISearchPageProps> = ({ setInputGenre, inputGenre }) => {
  return (
    <section className="search-page">
      <Searchbar />
      <GenreSlider setInputGenre={setInputGenre} />
      <MovieList inputGenre={inputGenre} />
    </section>
  );
};

export default SearchPage;
