import React from "react";

const Search = () => {
  return (
    <>
      <form className="flex w-full max-w-sm items-center space-x-2 search-bar">
        <input
          type="text"
          placeholder="Enter Movie..."
          className="bg-black text-white border border-white rounded-md"
        />
        <button className="bg-white  text-black ml-2 px-3 py-2 rounded-md hover:bg-gray-200 font-medium	">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
