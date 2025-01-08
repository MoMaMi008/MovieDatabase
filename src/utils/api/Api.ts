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

export const getMovieListUrl = (genreId: number, page: number = 1): string => {
  const resultUrl = `${BASE_URL}discover/movie?&language=${chosenLanguage}&with_genres=${genreId}&page=${page}`;
  return resultUrl;
};

export const getMovieImage = (image_path: string) => {
    const resultUrl = `https://image.tmdb.org/t/p/original${image_path}`;
    return resultUrl;
};
export const fetchMovieTrailers = async (movieId: number) => {
  const response = await fetch(`${BASE_URL}movie/${movieId}/videos?language=${chosenLanguage}`, OPTIONS);

  if (!response.ok) {
      throw new Error('Failed to fetch trailers');
  }
  const data = await response.json();
  return data.results; 
};

