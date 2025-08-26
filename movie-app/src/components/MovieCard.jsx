// function MovieCard({ movie, onSelect }) {
//   return (
//     <div 
//     onClick={() => onSelect(movie.imdbID)}
//     className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
//       <img
//         src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
//         alt={movie.Title}
//         className="w-full h-72 object-cover"
//       />
//       <div className="p-2">
//         <h2 className="font-semibold text-lg">{movie.Title}</h2>
//         <p className="text-gray-600 text-sm">{movie.Year}</p>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect(movie.imdbID)} // ✅ click handler
      className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2">
        <h2 className="font-semibold text-lg">{movie.Title}</h2>
        <p className="text-gray-600 text-sm">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;

