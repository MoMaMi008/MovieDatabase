import { FC } from "react";
import GenreSlider from "../../components/genreSlider/GenreSlider";
import MoviesByGenre from "../../components/moviesByGenre/MoviesByGenre";
import Searchbar from "../../components/searchbar/Searchbar";
import "./SearchPage.css";

interface ISearchPageProps {
  inputGenreId: number;
  setInputGenreId: React.Dispatch<React.SetStateAction<number>>;
}
const SearchPage: FC<ISearchPageProps> = ({
  setInputGenreId,
  inputGenreId,
}) => {
  return (
    <section className="search-page">
      <Searchbar />
      <GenreSlider setInputGenreId={setInputGenreId} />
      <MoviesByGenre inputGenreId={inputGenreId} />
    </section>
  );
};

export default SearchPage;
