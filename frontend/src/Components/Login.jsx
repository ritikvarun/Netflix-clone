import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoding, setUser } from "../redux/userSlice";

const Login = () => {
  const [islogin, setIslogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIslogin(!islogin);
  };

  const getInputData = async (e) => {
    dispatch(setLoding(true));
    e.preventDefault();
    if (islogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoding(false));
      }
    } else {
      //Register
      dispatch(setLoding(true));
      const user = { fullname, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIslogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoding(false));
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <img
          className="w-full h-full min-h-screen object-cover absolute top-0 left-0 -z-10"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp"
          alt="banner-logo"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-[90%] sm:w-2/3 md:w-2/5 lg:w-1/3 xl:w-1/4 items-center justify-center mt-24 mx-auto bg-black text-white p-6 sm:p-10 md:p-12 opacity-90 rounded-md relative z-10"
      >
        <div className="flex flex-col w-full">
          <h1 className="text-center font-bold text-2xl sm:text-3xl mb-4">
            {islogin ? "Login" : "Signup"}
          </h1>

          {!islogin && (
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800"
          />
          <button className="bg-red-600 mt-6 cursor-pointer mb-2 p-3 rounded font-semibold text-base sm:text-lg">
            {isLoading ? "loading..." : islogin ? "Login" : "Signup"}
          </button>
          <p className="text-center text-sm sm:text-base">
            {islogin ? "New To Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={loginHandler}
              className="text-blue-400 cursor-pointer font-semibold"
            >
              {islogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;