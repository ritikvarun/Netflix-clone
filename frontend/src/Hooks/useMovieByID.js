import { useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getclipMovie } from "../redux/movieSlice";

const useMovieByID = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieID}/videos`,
          options
        );
        const Clip = res?.data?.results?.filter((item) => item.type === "Clip");
        dispatch(getclipMovie(Clip.length > 0 ? Clip[0] : res.data.results[0]));
      } catch (error) {
        console.log(error);
      }
    };

    if (movieID) {
      fetchMovie();
    }
  }, [movieID, dispatch]);
};

export default useMovieByID;
