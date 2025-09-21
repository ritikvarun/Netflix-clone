import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: "",
    searchedMovies: [],
  },
  reducers: {
    setSeachedMoviesDetails: (state, action) => {
      const { searchMovie, movies } = action.payload;
      state.movieName = searchMovie;
      state.searchedMovies = movies;
    },
  },
});
export const { setSeachedMoviesDetails } = searchSlice.actions;
export default searchSlice.reducer;