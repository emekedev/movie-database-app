import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎬 Movie Database</h1>

      {/* Search Input */}
      <SearchBar setMovies={setMovies} />

      {/* Show details if a movie is selected, otherwise show the list */}
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
        <MovieList movies={movies} onMovieClick={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
