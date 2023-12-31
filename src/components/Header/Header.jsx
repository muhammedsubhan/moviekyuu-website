import React from "react";
import CardContainer from "../CardContaniner/CardContainer";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-3/5 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-6xl text-white font-medium mb-7 ">
            Welcome to{" "}
            <span className="animate-bounce inline-block transition-all">
              🎬
            </span>{" "}
            MovieKyuu
          </h1>
          <h4 className="text-2xl font-normal text-white">
            Discover and explore a vast collection of movies.
          </h4>
         <Link to="/movie">
         <button className="text-black mt-10 bg-white rounded-md w-32 py-2 hover:bg-gray-200">
            Browse Movies
          </button>
         </Link>
        </div>
      </div>
      <CardContainer />
    </>
  );
};

export default Header;
