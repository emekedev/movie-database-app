import React, { useState } from "react";

function SearchBar({ setMovies }) {
  const [query, setQuery] = useState("");

  const API_KEY = "thewdb"; 

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        alert("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 15px" }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
