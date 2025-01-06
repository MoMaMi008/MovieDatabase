import { FC } from "react";
import useFetch from "../../hooks/useFetch";
import { getGenreUrl, OPTIONS } from "../../utils/api/Api";

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

  const getGenreID = (singleGenre: IGenre) => {
    setInputGenreId(singleGenre.id);
  };

  return (
    <section>
      {" "}
      {genreData.data?.genres.map((singleGenre: IGenre) => (
        <button
          type="button"
          key={singleGenre.id}
          onClick={() => getGenreID(singleGenre)}
        >
          {singleGenre.name}
        </button>
      ))}{" "}
    </section>
  );
};

export default GenreSlider;
