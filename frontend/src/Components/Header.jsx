import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from "../utils/constant.js";
import { setUser } from "../redux/userSlice.js";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice.js";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <header className="w-full bg-white top-0 left-0 sticky z-50 px-4 py-4 sm:px-8 flex items-center justify-between bg-gradient-to-b from-black">
      <img className="w-32 sm:w-44" src={logo} alt="Netflix-logo" />
      {user && (
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <IoIosArrowDropdown size={24} className="text-white" />
            <h1 className="text-white text-sm sm:text-base">{user.fullname}</h1>
          </div>
          <div className=" flex gap-2">
            <button
              onClick={logOutHandler}
              className="bg-red-800 outline-none px-3 py-1 text-white cursor-pointer rounded text-xs sm:text-sm"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-red-800 outline-none px-3 py-1 text-white cursor-pointer rounded text-xs sm:text-sm"
            >
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
