import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import movieSlice from "./movieSlice.js";
import searchSlice from "./searchSlice.js";
const store = configureStore({
  reducer: {
    app: userSlice,
    movie: movieSlice,
    searchMovie: searchSlice,
  },
});
export default store;
