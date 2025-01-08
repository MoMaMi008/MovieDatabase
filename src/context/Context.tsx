import { createContext } from "react";
import { IMovieHome } from "../pages/home/Home";
import { IGenre } from "../components/genreSlider/GenreSlider";

interface IBookmarksContext {
  bookmarks: IMovieHome[];
  setBookmarks: React.Dispatch<React.SetStateAction<IMovieHome[]>>;
}

export const BookmarksContext = createContext<IBookmarksContext>(null!);

interface IInputGenreContext {
  inputGenre: IGenre;
  setInputGenre: React.Dispatch<React.SetStateAction<IGenre>>;
}

export const InputGenreContext = createContext<IInputGenreContext>(null!);
