import React from "react";

function MovieList({ movies, onMovieClick }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onMovieClick(movie)}
          style={{
            cursor: "pointer",
            width: "150px",
            textAlign: "center",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
            alt={movie.Title}
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h3 style={{ fontSize: "14px", margin: "10px 0 0" }}>{movie.Title}</h3>
          <p style={{ fontSize: "12px", color: "#555" }}>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
