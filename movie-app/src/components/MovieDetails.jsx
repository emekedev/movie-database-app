import React, { useEffect, useState } from "react";

function MovieDetails({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const API_KEY = "thewdb";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
        );
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchDetails();
  }, [movie]);

  if (!details) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onClose} style={{ marginBottom: "20px" }}>
        ⬅ Back
      </button>
      <h2>{details.Title} ({details.Year})</h2>
      <img
        src={details.Poster !== "N/A" ? details.Poster : "https://via.placeholder.com/300"}
        alt={details.Title}
        style={{ width: "200px", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p><strong>Genre:</strong> {details.Genre}</p>
      <p><strong>Plot:</strong> {details.Plot}</p>
      <p><strong>Director:</strong> {details.Director}</p>
      <p><strong>Actors:</strong> {details.Actors}</p>
      <p><strong>IMDB Rating:</strong> {details.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;
