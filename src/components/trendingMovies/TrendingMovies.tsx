import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import useFetch from "../../hooks/useFetch";
import { getMovieImage, OPTIONS } from "../../utils/api/Api";
import { IMovieHome, ISearchData } from "../../pages/home/Home";

const TrendingMovies = () => {
    const { data } = useFetch<ISearchData>("https://api.themoviedb.org/3/movie/popular", OPTIONS);
    const [slicedData, setSlicedData] = useState<IMovieHome[]>([]);

    useEffect(() => {
        if (data) {
            setSlicedData(data.results.slice(0, 5));
        }
    }, [data]);

    console.log(slicedData);

    return (
        <section>
            <h2>Trending Movies</h2>
            {slicedData.length != 0 && (
                <Swiper slidesPerView={1} pagination={{ clickable: false }} autoplay={{ delay: 2000 }} loop={true}>
                    {slicedData.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <article>
                                <img src={getMovieImage(movie.id, movie.poster_path)} alt={`Movieposter of ${movie.title}`} />
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default TrendingMovies;
