import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getSearchUrl, OPTIONS } from "../../utils/api/Api";
import { IMovieHome, ISearchData } from "../../pages/home/Home";
import "./Searchbar.css";
import SearchIcon from "../../assets/SVG/SearchIcon";
import { getReleasedYear } from "../../utils/functions/Functions";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const { data } = useFetch<ISearchData>(getSearchUrl(input), OPTIONS);

  return (
    <section className="searchbar">
      <div className="input-box">
        <input
          type="text"
          value={input}
          name="input"
          onChange={(e) => handleChange(e)}
          placeholder="Search Movie ..."
        />
        <SearchIcon />
      </div>
      {input.length > 0 && (
        <div className="search-output">
          {" "}
          <ul>
            {data?.results.map((singleMovie: IMovieHome) => (
              <Link to={`/movie/${singleMovie.id}`} key={singleMovie.id}>
                <li>
                  {singleMovie.title}
                  {isNaN(getReleasedYear(singleMovie.release_date))
                    ? ""
                    : ` (${getReleasedYear(singleMovie.release_date)})`}
                </li>
              </Link>
            ))}
          </ul>{" "}
        </div>
      )}
    </section>
  );
};

export default Searchbar;
