import { createContext } from "react";
import { IGenre } from "../components/genreSlider/GenreSlider";
interface IGenreArrayContext {
  genreArray: IGenre[];
  setGenreArray: React.Dispatch<React.SetStateAction<IGenre[]>>;
}
export const genreArrayContext = createContext<IGenreArrayContext>(null!);
