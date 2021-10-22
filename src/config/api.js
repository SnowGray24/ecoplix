import axios from "axios";

const API_KEY = '8f1b0db93c652509247569d1ca5857f9';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: API_KEY,
      language: 'pt-BR'
    }
});

export default {
  trending: async () => api.get('/trending/all/week'),
  topRated: async () => api.get('/movie/top_rated'),
  actionMovies: async () => api.get('/discover/movie?&with_genres=28'),
  comedyMovies: async () => api.get('/discover/movie?&with_genres=35'),
};