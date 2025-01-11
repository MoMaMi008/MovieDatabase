import useFetch from "../../hooks/useFetch";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import { getMovieListUrl, OPTIONS } from "../../utils/api/Api";
import React, { useEffect, useState } from "react";
import "./MovieList.css";

import { IGenre } from "../genreSlider/GenreSlider";
import MovieCard from "../movieCard/MovieCard";

interface IMovieListProps {
    inputGenre: IGenre;
    ref: React.RefObject<HTMLDivElement>;
}

const MovieList = React.forwardRef<HTMLDivElement, IMovieListProps>((props, ref) => {
    const [movies, setMovies] = useState<IMovieHome[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [shouldFetch, setShouldFetch] = useState<boolean>(true);

    const fetchUrl = shouldFetch ? getMovieListUrl(props.inputGenre?.id, page) : null;
    const { data } = useFetch<ISearchData>(fetchUrl, OPTIONS);

    useEffect(() => {
        if (data) {
            setMovies((prevMovies) => (page === 1 ? data.results : [...prevMovies, ...data.results]));
            setTotalPages(data.total_pages);
            setShouldFetch(false); // Disable fetch after initial load
        }
    }, [data]);

    useEffect(() => {
        setMovies([]);
        setPage(1);
        setShouldFetch(true); // Enable fetch for new genre
    }, [props.inputGenre]);

    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
        setShouldFetch(true); // Enable fetch for next page
    };

    return (
        <section className="movie-genre-list" ref={ref}>
            {movies.map((singleMovie: IMovieHome) => (
                <MovieCard singleMovie={singleMovie} inputGenre={props.inputGenre} key={singleMovie.id} />
            ))}
            {page < totalPages && (
                <button onClick={loadMoreMovies} className="load-more-button">
                    Load More
                </button>
            )}
        </section>
    );
});

export default MovieList;
