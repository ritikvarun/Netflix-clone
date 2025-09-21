import axios from "axios";
import React, { useState } from "react";
import { options, SearchMovies_Url } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSeachedMoviesDetails } from "../redux/searchSlice.js";
import { setLoding } from "../redux/userSlice";
import MovieList from "./MoiveList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovies } = useSelector(
    (store) => store.searchMovie || {}
  );
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoding(true));
    try {
      const res = await axios.get(
        `${SearchMovies_Url}?query=${searchMovie}`,
        options
      );
      const movies = res?.data?.results;
      dispatch(setSeachedMoviesDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoding(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="flex justify-center pt-16 w-full">
        <form
          onSubmit={submitHandler}
          className="w-[95%] sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5"
        >
          <div className="flex flex-col sm:flex-row gap-3 p-3 shadow-md border-2 border-gray-200 rounded-lg w-full bg-white/80">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="w-full rounded-md text-lg outline-none px-3 py-2"
              type="text"
              placeholder="Search Movies..."
            />
            <button
              className="w-full sm:w-auto cursor-pointer bg-red-800 rounded-md text-white px-4 py-2 font-semibold"
              type="submit"
            >
              {isLoading ? "loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <MovieList
          title={movieName}
          searchMovie={true}
          movies={searchedMovies}
        />
      </div>
    </>
  );
};

export default SearchMovie;
