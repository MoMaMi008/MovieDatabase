export const apiKey = import.meta.env.VITE_API_KEY;

export const BASE_URL = "https://api.themoviedb.org/3/";
export const OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
    },
};

export const getTrendingUrl = (language: string): string => {
    const resultUrl = `${BASE_URL}movie/trending/movie/day?language=${language}`;
    return resultUrl;
};

export const getGenreUrl = (language: string): string => {
    const resultUrl = `${BASE_URL}genre/movie/list?language=${language}`;
    return resultUrl;
};

export const getSearchUrl = (query: string, language: string) => {
    const resultUrl = `${BASE_URL}search/movie?query=${query}&language=${language}&page=1`;
    return resultUrl;
};

export const getDetailsUrl = (movie_id: number, language: string) => {
    const resultUrl = `${BASE_URL}movie/${movie_id}?language=${language}`;
    return resultUrl;
};
