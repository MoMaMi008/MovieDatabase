import { FC } from "react";
import GenreSlider, { IGenre } from "../../components/genreSlider/GenreSlider";

import Searchbar from "../../components/searchbar/Searchbar";
import "./SearchPage.css";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/footer/Footer";

interface ISearchPageProps {
  inputGenre: IGenre;
  setInputGenre: React.Dispatch<React.SetStateAction<IGenre>>;
}
const SearchPage: FC<ISearchPageProps> = ({ setInputGenre, inputGenre }) => {
  return (
    <section className="search-page">
      <Searchbar />
      <GenreSlider setInputGenre={setInputGenre} />
      <MovieList inputGenre={inputGenre} />
      <Footer />
    </section>
  );
};

export default SearchPage;
