import { FC } from "react";
import useFetch from "../../hooks/useFetch";
import { getGenreUrl, OPTIONS } from "../../utils/api/Api";
import "./GenreSlider.css";
import { motion } from "framer-motion";

interface IGenreData {
  genres: IGenre[];
}
interface IGenre {
  id: number;
  name: string;
}

interface IGenreSliderProps {
  setInputGenreId: React.Dispatch<React.SetStateAction<number>>;
}
const GenreSlider: FC<IGenreSliderProps> = ({ setInputGenreId }) => {
  const genreData = useFetch<IGenreData>(getGenreUrl("en-US"), OPTIONS);
  console.log(genreData);

  const getGenreID = (singleGenre: IGenre) => {
    setInputGenreId(singleGenre.id);
  };

  return (
    <motion.div className="genre-slider" whileTap={{ cursor: "grabbing" }}>
      <motion.div
        className="inner-genre-slider"
        drag="x"
        dragConstraints={{ right: 0, left: -2100 }}
      >
        {" "}
        {genreData.data?.genres
          .sort((a: IGenre, b: IGenre) => a.id - b.id)
          .map((singleGenre: IGenre) => (
            <motion.button
              type="button"
              key={singleGenre.id}
              onClick={() => getGenreID(singleGenre)}
            >
              {singleGenre.name}
            </motion.button>
          ))}{" "}
      </motion.div>
    </motion.div>
  );
};

export default GenreSlider;
