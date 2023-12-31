import React from "react";
import { Link } from "react-router-dom";
// import Search from "../search/Search";

const Navabr = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between nav-border mb-2">
          <div className="ml-20 font-display hidden md:flex p-3 ">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <div className="flex flex-row flex-nowrap items-center gap-2 md:-ml-12">
                <div className="bg-purple-600 h-8 w-8 rounded-full text-center items-center flex justify-center">
                  🎬
                </div>
                <span className="font-bold sm:inline-block text-white">
                  MovieKyuu
                </span>
              </div>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/movie" className=" text-white hover:text-gray-300">
                Movies
              </Link>
              <Link to="/my-list" className=" text-white hover:text-gray-300">
                My List
              </Link>
              <Link to="/about" className=" text-white hover:text-gray-300">
                About
              </Link>
            </nav>
          </div>
          {/* <Search /> */}
          <Link
            to="/search"
            className="text-white hover:text-gray-300 px-10 text-sm font-medium"
          >
            <h3>Search</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navabr;
