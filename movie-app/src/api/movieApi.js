const API_KEY = 'dd3e9aa8';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query) => {
  const res = await fetch(`${API_URL}&s=${query}`);
  return res.json();
};