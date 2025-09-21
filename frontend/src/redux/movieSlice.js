import { createSlice } from "@reduxjs/toolkit";
import { Upcoming_API } from "../utils/constant";

const movieSlice = createSlice({
  name: "movie", // typo fix
  initialState: {
    nowPlayingMovies: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    toggle: false,
    clipMovie: null,
    open: false,
    id: "",
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getclipMovie: (state, action) => {
      state.clipMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getclipMovie,
  setOpen,
  getId,
} = movieSlice.actions;
export default movieSlice.reducer;
