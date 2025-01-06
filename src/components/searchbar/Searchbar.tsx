import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getSearchUrl, OPTIONS } from "../../utils/api/Api";

interface ISearchData {
  page: number;
  results: IMovieHome[];
  total_pages: number;
  total_results: number;
}
export interface IMovieHome {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchData = useFetch<ISearchData>(
    getSearchUrl(input, "en-US"),
    OPTIONS
  );

  console.log(searchData);

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
