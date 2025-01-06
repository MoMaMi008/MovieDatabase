import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getSearchUrl, OPTIONS } from "../../utils/api/Api";
import { IMovieHome, ISearchData } from "../../pages/home/Home";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchData = useFetch<ISearchData>(
    getSearchUrl(input, "en-US"),
    OPTIONS
  );

  return (
    <section>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
          placeholder="Search Movie ..."
        />
        <p>🔍</p>
      </div>
      {input.length > 0 && (
        <div className="search-output">
          {" "}
          <ul>
            {searchData.data?.results.map((singleMovie: IMovieHome) => (
              <a href="#">
                <li>{singleMovie.title}</li>
              </a>
            ))}
          </ul>{" "}
        </div>
      )}
    </section>
  );
};

export default Searchbar;
