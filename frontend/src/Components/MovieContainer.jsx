import MovieList from "./MoiveList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className=" w-full bg-black">
      <div className=" px-2 sm:px-4 md:px-8 lg:px-16">
        <MovieList title={"Popular Movie"} movies={movie.PopularMovies} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MovieList title={"Top Rated Movies"} movies={movie.TopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.UpcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;