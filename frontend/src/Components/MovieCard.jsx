import { Poster_url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieID }) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(getId(movieID));
    dispatch(setOpen(true));
  };
  if (!posterPath) return null;
  return (
    <div className="w-48  " onClick={handleOpen}>
      <img className="rounded-md" src={`${Poster_url}/${posterPath}`} alt="none" />
    </div>
  );
};

export default MovieCard;
