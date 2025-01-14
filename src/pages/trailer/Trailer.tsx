import { useParams } from "react-router-dom";
import "./Trailer.css";
const Trailer = () => {
  const { VIDEO_ID } = useParams<{ VIDEO_ID: string }>();
  return (
    <div className="trailer">
      <iframe
        id="player"
        // type="text/html"
        width="928"
        height="428"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1`}
        // frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Trailer;
