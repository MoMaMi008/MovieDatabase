import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getDetailsUrl, OPTIONS } from "../../utils/api/Api";
import { FaStar, FaCircle } from "react-icons/fa";
import "./MovieDetails.css";
import Button from "../../components/button/Button";

interface IMovieDetails {
    title: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    genres: { name: string }[];
    runtime: number;
    overview: string;
    spoken_languages: { english_name: string }[];
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const language = "en-US";
    const { data: movie, loading, error } = useFetch<IMovieDetails>(getDetailsUrl(Number(id), language), OPTIONS);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    if (!movie) return <div>No movie found.</div>;

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return (
        <div className="movie-details-container" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <div className="gradient-overlay"></div>
            <div className="movie-details">
                <h2>Movie Details</h2>
                <p className="movie-name">{movie.title}</p>

                <div className="movie-info">
                    <div className="info-group">
                        <FaStar className="star-icon" />
                        <span className="rating-value">{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="info-group">
                        <FaCircle className="separator" />
                        <span className="date">{new Date(movie.release_date).getFullYear()}</span>
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
                    <p>{movie.overview}</p>
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
                <Button text="Watch Trailer" img_path="/path/to/icon.png" />
            </div>
        </div>
    );
};

export default MovieDetails;
