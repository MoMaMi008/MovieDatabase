//React import
import { useEffect, useRef, useState } from "react";
// React-Router-Dom import
import { Link } from "react-router-dom";
// eigene imports
import useFetch from "../../hooks/useFetch";
import { getMovieImage, getTrendingUrl, OPTIONS } from "../../utils/api/Api";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
// Swiper imports
import { Autoplay, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/virtual";
// css import
import "./TrendingMovies.css";

const TrendingMovies = () => {
    const { data } = useFetch<ISearchData>(getTrendingUrl(), OPTIONS);
    const [slicedData, setSlicedData] = useState<IMovieHome[]>([]);

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLElement | null>(null);
    // in der folgenden Funktion, wird der erste parameter nicht benötigt. die schreibweise "_" oder "_unused" ist üblich, um dies zu signalisieren. auch typescript ist mit diesen beiden schreibweisen vertraut und wirft keinen fehler.
    const onAutoplayTimeLeft = (_unused: unknown, time: number, progress: number) => {
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
            <div className="head-textbox">
                <h2>Trending Movies</h2> <p>See all</p>
            </div>
            {slicedData.length != 0 && (
                <Swiper modules={[Autoplay, Virtual, Pagination]} slidesPerView={1} spaceBetween={50} autoplay={{ delay: 10000 }} loop={true} virtual pagination={{ clickable: false }} onAutoplayTimeLeft={onAutoplayTimeLeft}>
                    {slicedData.map((movie, index) => (
                        <SwiperSlide className="slide" key={index} virtualIndex={index}>
                            <article>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={getMovieImage(movie.backdrop_path)} alt={`Movieposter of ${movie.title}`} />
                                    <div className="swiper-textbox">
                                        <p className="title">{movie.title}</p>
                                        <p className="rate">⭐{movie.vote_average.toFixed(1)}/10.0</p>
                                    </div>
                                </Link>
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
