export const apiKey = import.meta.env.VITE_API_KEY;

export const BASE_URL = "https://api.themoviedb.org/3/";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};
export const chosenLanguage = "en-US";

export const getTrendingUrl = (): string => {
  const resultUrl = `${BASE_URL}movie/trending/movie/day?language=${chosenLanguage}`;
  return resultUrl;
};

export const getGenreUrl = (): string => {
  const resultUrl = `${BASE_URL}genre/movie/list?language=${chosenLanguage}`;
  return resultUrl;
};

export const getSearchUrl = (query: string) => {
  const resultUrl = `${BASE_URL}search/movie?query=${query}&language=${chosenLanguage}&page=1`;
  return resultUrl;
};

export const getDetailsUrl = (movie_id: number) => {
  const resultUrl = `${BASE_URL}movie/${movie_id}?language=${chosenLanguage}`;
  return resultUrl;
};

export const getMovieListUrl = (genreId: number | undefined): string => {
  const resultUrl = `${BASE_URL}discover/movie?&language=${chosenLanguage}&with_genres=${genreId}`;
  return resultUrl;
};
