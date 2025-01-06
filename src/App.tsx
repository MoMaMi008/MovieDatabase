import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import IntroApp from "./pages/introApp/IntroApp";
import Home from "./pages/home/Home";
import SearchPage from "./pages/searchPage/SearchPage";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<IntroApp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search_page" element={<SearchPage />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
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
