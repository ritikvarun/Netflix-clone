import axios from "axios";
import { Now_Popular_API, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Now_Popular_API, options);
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default usePopularMovies;
