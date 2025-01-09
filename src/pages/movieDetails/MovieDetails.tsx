import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getDetailsUrl, OPTIONS } from "../../utils/api/Api";
import { FaStar, FaCircle } from "react-icons/fa";
import "./MovieDetails.css";
import Button from "../../components/button/Button";
import { getReleasedYear } from "../../utils/functions/Functions";
import YouTubeIcon from "/Users/supercoder/Desktop/MovieAppReactFinal/src/assets/SVG/youtube.svg";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

export interface IMovieDetails {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    genres: { id: number; name: string }[];
    runtime: number;
    overview: string;
    spoken_languages: { english_name: string }[];
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: movie, loading } = useFetch<IMovieDetails>(getDetailsUrl(Number(id)), OPTIONS);

    const [showFullOverview, setShowFullOverview] = useState(false);

    if (loading || !movie) return <div>Loading...</div>;

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    const toggleOverview = () => {
        setShowFullOverview(!showFullOverview);
    };

    const getShortOverview = (overview: string) => {
        if (overview.length > 150 && !showFullOverview) {
            return `${overview.substring(0, 150)}...`;
        }
        return overview;
    };

    return (
        <div className="movie-details-container" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <div className="gradient-overlay"></div>
            <div className="movie-details">
                <h2>Movie Details</h2>
                <p className="movie-name">{movie.title}</p>

                <div className="movie-info">
                    <div className="info-group">
                        <FaStar className="star-icon" />
                        <span className="rating-value">{movie.vote_average ? movie.vote_average.toFixed(1) : "Keine Bewertung"}</span>
                    </div>
                    <div className="info-group">
                        <FaCircle className="separator" />
                        <span className="date">{getReleasedYear(movie.release_date)}</span>
                    </div>
                    <div className="info-group">
                        <FaCircle className="separator" />
                        <span className="genre">{movie.genres[0]?.name}</span>
                    </div>
                    <div className="info-group">
                        <FaCircle className="separator" />
                        <span className="duration">
                            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                        </span>
                    </div>
                </div>

                <div className="overview">
                    <h2>Overview</h2>
                    <p>
                        {getShortOverview(movie.overview)}
                        {!showFullOverview && (
                            <button onClick={toggleOverview} className="see-more">
                                {" "}
                                See more...
                            </button>
                        )}
                        {showFullOverview && (
                            <>
                                <button onClick={toggleOverview} className="see-less">
                                    {" "}
                                    See less...
                                </button>
                            </>
                        )}
                    </p>
                </div>

                <div className="gen-lang">
                    <div className="genres">
                        <h2>Genres</h2>
                        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                    </div>
                    <div className="languages">
                        <h2>Languages</h2>
                        <p>{movie.spoken_languages.map((lang) => lang.english_name).join(", ")}</p>
                    </div>
                </div>
                <div className="movie-actions">
                    <Button text="Watch Trailer" img_path={YouTubeIcon} link_path={`/trailer/${id}`} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MovieDetails;
