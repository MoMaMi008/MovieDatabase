import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getMovieImage, OPTIONS } from "../../utils/api/Api";
import { IMovieHome, ISearchData } from "../../pages/home/Home";

import { Autoplay, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/virtual";
import "./TrendingMovies.css";

const TrendingMovies = () => {
    const { data } = useFetch<ISearchData>("https://api.themoviedb.org/3/movie/popular", OPTIONS);
    const [slicedData, setSlicedData] = useState<IMovieHome[]>([]);

    const progressCircle = useRef<HTMLElement | null>(null);
    const progressContent = useRef<HTMLElement | null>(null);
    const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
        progressCircle.current!.style.setProperty("--progress", String(1 - progress));
        progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        if (data) {
            setSlicedData(data.results.slice(0, 5));
        }
    }, [data]);

    console.log(data);

    return (
        <section className="trendingMovies">
            <h2>Trending Movies</h2>
            {slicedData.length != 0 && (
                <Swiper modules={[Autoplay, Virtual, Pagination]} slidesPerView={1} spaceBetween={50} autoplay={{ delay: 10000 }} loop={true} virtual pagination={{ clickable: false }} onAutoplayTimeLeft={onAutoplayTimeLeft}>
                    {slicedData.map((movie, index) => (
                        <SwiperSlide className="slide" key={index} virtualIndex={index}>
                            <article>
                                <img src={getMovieImage(movie.poster_path)} alt={`Movieposter of ${movie.title}`} />
                            </article>
                        </SwiperSlide>
                    ))}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            )}
        </section>
    );
};

export default TrendingMovies;
