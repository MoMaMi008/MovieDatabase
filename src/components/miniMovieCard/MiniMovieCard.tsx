import { FC } from "react";
import { IMovieHome } from "../../pages/home/Home";
import "./MiniMovieCard.css";
import { BASE_URL } from "../../utils/api/Api";

interface IMiniMovieCardProps {
  singleMovie: IMovieHome;
}

const MiniMovieCard: FC<IMiniMovieCardProps> = ({ singleMovie }) => {
  return (
    <article className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
        alt={singleMovie.title}
      />
      <div className="textbox-wrapper">
        <div className="card-top-textbox">
          <p>{singleMovie.title}</p>{" "}
        </div>
        <div className="card-bottom-textbox">
          <p className="text-rate">⭐{singleMovie.vote_average}</p>
          <p>• {new Date(singleMovie.release_date).getFullYear()}</p>
          <p>{singleMovie.genre_ids}</p>
          <p>(Dauer 2h38m)</p>
        </div>
      </div>
    </article>
  );
};

export default MiniMovieCard;
