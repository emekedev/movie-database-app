// import { useEffect, useState } from "react";
// import { fetchMovieDetails } from "../api/movieApi";

// function MovieDetails({ movieId, onClose }) {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const loadDetails = async () => {
//       const data = await fetchMovieDetails(movieId);
//        console.log("Fetched Movie Details:", data);
//       setMovie(data);
//     };
//     loadDetails();
//   }, [movieId]);

//   if (!movie) {
//     return <p className="text-center">Loading...</p>;
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg overflow-y-auto max-h-[90vh]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//         >
//           ✕
//         </button>

//         {/* Movie Poster */}
//         <img
//           src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
//           alt={movie.Title}
//           className="w-full h-80 object-cover rounded mb-4"
//         />

//         {/* Movie Info */}
//         <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
//         <p className="text-gray-600 italic mb-2">{movie.Year} • {movie.Runtime}</p>
//         <p className="mb-4">{movie.Plot}</p>
//         <p><strong>Actors:</strong> {movie.Actors}</p>
//         <p><strong>Director:</strong> {movie.Director}</p>
//         <p><strong>Genre:</strong> {movie.Genre}</p>
//         <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;

import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/movieApi";

function MovieDetails({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    loadDetails();
  }, [movieId]);

  if (!movie) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          ✕
        </button>

        {/* Movie Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="w-full h-80 object-cover rounded mb-4"
        />

        {/* Movie Info */}
        <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
        <p className="text-gray-600 italic mb-2">{movie.Year} • {movie.Runtime}</p>
        <p className="mb-4">{movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieDetails;

