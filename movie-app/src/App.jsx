import {useState, useEffect} from 'react';
import { fetchMovies } from "./api/movieApi";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App(){
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Avengers');
  useEffect(()=>{
    const loadMovies = async()=>{
      const data = await fetchMovies(query);
      setMovies(data.Search || []);
    };
    loadMovies();
  }, [query])

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm)
    setQuery(searchTerm);
  };

  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;