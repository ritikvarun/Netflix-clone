import React from "react";
import Body from "./Components/Body";
import toast, { Toaster } from "react-hot-toast";
import MovieDilog from "./Components/MovieDilog"


const App = () => {
  return (
    <>
      <Body />
      <Toaster />
      <MovieDilog/>
    </>
  );
};

export default App;
