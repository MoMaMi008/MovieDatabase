import { FC } from "react";
import useFetch from "../../hooks/useFetch";
import { getGenreUrl, OPTIONS } from "../../utils/api/Api";
import "./GenreSlider.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { genreArrayContext } from "../../context/Context";

export interface IGenreData {
  genres: IGenre[];
}
export interface IGenre {
  id: number;
  name: string;
}

interface IGenreSliderProps {
  setInputGenre: React.Dispatch<React.SetStateAction<IGenre | null>>;
}
const GenreSlider: FC<IGenreSliderProps> = ({ setInputGenre }) => {
  const genreData = useFetch<IGenreData>(getGenreUrl("en-US"), OPTIONS);
  console.log("genreData", genreData);

  // ^später für Rendering Genres auf der MovieDetails Page
  // const { genreArray, setGenreArray } = useContext(genreArrayContext);

  // useEffect(() => {
  //   if (genreData && genreData.data && genreData.data.genres) {
  //     // Only update the state if genreArray is empty
  //     if (genreArray.length === 0) {
  //       setGenreArray([...genreData.data.genres]);
  //     }
  //   }
  // }, [genreData, genreArray, setGenreArray]);

  // console.log("genreArray", genreArray);

  const getGenreID = (singleGenre: IGenre) => {
    setInputGenre(singleGenre);
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
            <Link to={"/search_page"} key={singleGenre.id}>
              {" "}
              <motion.button
                type="button"
                onClick={() => getGenreID(singleGenre)}
              >
                {singleGenre.name}
              </motion.button>
            </Link>
          ))}{" "}
      </motion.div>
    </motion.div>
  );
};

export default GenreSlider;
