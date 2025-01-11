import { FC, useRef } from "react";
import GenreSlider, { IGenre } from "../../components/genreSlider/GenreSlider";

import Searchbar from "../../components/searchbar/Searchbar";
import "./SearchPage.css";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/footer/Footer";
import BackToTopButton from "../../components/backToTopButton/BackToTopButton";

interface ISearchPageProps {
    inputGenre: IGenre;
    setInputGenre: React.Dispatch<React.SetStateAction<IGenre>>;
}
const SearchPage: FC<ISearchPageProps> = ({ setInputGenre, inputGenre }) => {
    const listRef = useRef(null);

    return (
        <section className="search-page">
            <Searchbar />
            <GenreSlider setInputGenre={setInputGenre} />
            <BackToTopButton listRef={listRef} />
            <MovieList inputGenre={inputGenre} ref={listRef} />
            <Footer />
        </section>
    );
};

export default SearchPage;
