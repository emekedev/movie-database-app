function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="border rounded-lg p-2 shadow hover:shadow-lg transition"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold text-lg">{movie.Title}</h2>
            <p className="text-sm text-gray-600">{movie.Year}</p>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList; // ✅ default export
