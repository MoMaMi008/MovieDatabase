import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import IntroApp from "./pages/introApp/IntroApp";
import Home from "./pages/home/Home";
import SearchPage from "./pages/searchPage/SearchPage";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import { useState } from "react";
import { IGenre } from "./components/genreSlider/GenreSlider";
// import { genreArrayContext } from "./context/Context";

function App() {
  const [inputGenre, setInputGenre] = useState<IGenre | null>(null);
  // const [genreArray, setGenreArray] = useState<IGenre[]>([]);

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
        <Route path="/details" element={<MovieDetails />} />
      </>
    )
  );
  return (
    <>
      {" "}
      {/* <genreArrayContext.Provider value={{ genreArray, setGenreArray }}> */}
      <RouterProvider router={router} /> {/* </genreArrayContext.Provider> */}
    </>
  );
}

export default App;
