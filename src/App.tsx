import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import IntroApp from "./pages/introApp/IntroApp";
import Home, { IMovieHome } from "./pages/home/Home";
import SearchPage from "./pages/searchPage/SearchPage";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import { useState } from "react";
import { IGenre } from "./components/genreSlider/GenreSlider";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import { BookmarksContext, InputGenreContext } from "./context/Context";
// import Trailer from "./pages/trailer/Trailer";

function App() {
  const [inputGenre, setInputGenre] = useState<IGenre>({
    id: 12,
    name: "Adventure",
  });

  const [bookmarks, setBookmarks] = useState<IMovieHome[]>([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<IntroApp />} />
        <Route path="/home" element={<Home setInputGenre={setInputGenre} />} />
        <Route
          path="/search_page"
          element={
            <SearchPage inputGenre={inputGenre} setInputGenre={setInputGenre} />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/bookmarks/" element={<Bookmarks />} />
        {/* <Route path="/trailer/" element={<Trailer  />} /> */}
      </>
    )
  );
  return (
    <>
      <InputGenreContext.Provider value={{ inputGenre, setInputGenre }}>
        <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
          <RouterProvider router={router} />
        </BookmarksContext.Provider>
      </InputGenreContext.Provider>
    </>
  );
}

export default App;
