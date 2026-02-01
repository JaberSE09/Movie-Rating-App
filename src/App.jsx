import { ALL_MOVIES } from "./data/movies";
import MovieCard from "./components/MovieCard";
/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;

  return (
    <div className="container mx-auto flex">
      {movies.map((movie) => (
        <MovieCard key={movie.id} card={movie} />
      ))}
    </div>
  );
}
