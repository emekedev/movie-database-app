// import {useState, useEffect} from 'react';
// import { fetchMovies } from "./api/movieApi";
// import SearchBar from "./components/SearchBar";
// import MovieList from "./components/MovieList";
// import MovieDetails from "./components/MovieDetails";

// function App(){
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('Avengers');
//    const [selectedMovie, setSelectedMovie] = useState(null);
//   useEffect(()=>{
//     const loadMovies = async()=>{
//       const data = await fetchMovies(query);
//       setMovies(data.Search || []);
//     };
//     loadMovies();
//   }, [query])

//   const handleSearch = (searchTerm) => setQuery(searchTerm);
//   const handleSelectMovie = (id) => {
//     console.log("Selected Movie ID:", id); // 🔎 debug log
//     setSelectedMovie(id);
//   };
//   const handleCloseDetails = () => setSelectedMovie(null)

//   // const handleSearch = (searchTerm) => {
//   //   console.log("Searching for:", searchTerm)
//   //   setQuery(searchTerm);
//   // };

  
//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Search</h1>
//       <SearchBar onSearch={handleSearch} />
//      <MovieList movies={movies} onSelect={handleSelectMovie} />

//      {selectedMovie && (
//         <MovieDetails movieId={selectedMovie} onClose={handleCloseDetails} />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { fetchMovies } from "./api/movieApi";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(query);
      setMovies(data.Search || []);
    };
    loadMovies();
  }, [query]);

  const handleSearch = (searchTerm) => setQuery(searchTerm);
  const handleSelectMovie = (id) => setSelectedMovie(id);
  const handleCloseDetails = () => setSelectedMovie(null);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onSelect={handleSelectMovie} />

      {selectedMovie && (
        <MovieDetails movieId={selectedMovie} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;
