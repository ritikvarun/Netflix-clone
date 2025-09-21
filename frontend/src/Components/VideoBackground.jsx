import React from "react";
import useMovieByID from "../Hooks/useMovieByID";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID, bool }) => {
  const Clip = useSelector((store) => store.movie.clipMovie);
  useMovieByID(movieID);
  return (
    <div>
      <iframe
        className={`${bool ? "w-[100%]:" : ""}w-[100%] aspect-video`}
        src={`https://www.youtube.com/embed/${
          Clip ? Clip.key : ""
        }?autoplay=1&mute=1&si=UF4Y5doxNO3g_1Hq`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;