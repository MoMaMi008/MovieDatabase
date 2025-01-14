import { useParams } from "react-router-dom";
import "./Trailer.css";
const Trailer = () => {
  const { VIDEO_ID } = useParams<{ VIDEO_ID: string }>();
  return (
    <div className="youtubeplayer-container">
      <iframe
        id="player"
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
