import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie = false }) => {
  return (
    <>
      <div className="px-8">
        <h1
          className={`${
            searchMovie ? "text-black" : "text-white"
          } text-3xl py-3`}
        >
          {title}
        </h1>
        <div className="flex overflow-x-auto cursor-pointer no-scrollbar">
          <div className="flex items-center gap-2 ">
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie.id}  posterPath={movie.poster_path} movieID={movie.id}/>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
