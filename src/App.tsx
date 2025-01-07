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

function App() {
  const [inputGenreId, setInputGenreId] = useState<number>(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<IntroApp />} />
        <Route
          path="/home"
          element={<Home setInputGenreId={setInputGenreId} />}
        />
        <Route
          path="/search_page"
          element={
            <SearchPage
              inputGenreId={inputGenreId}
              setInputGenreId={setInputGenreId}
            />
          }
        />
        <Route path="/details" element={<MovieDetails />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
