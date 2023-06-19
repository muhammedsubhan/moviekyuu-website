import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navabr";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import MyList from "./pages/MyList/MyList";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Search from "./components/search/Search";
import MovieDetails from "./components/MoviesDetails/MovieDetails";

const App = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);

  const liftMoviesDetails = (data) => {
    setMoviesDetails(data);
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/movie"
            element={<Movies liftMoviesDetails={liftMoviesDetails} />}
          />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/movie-detail"
            element={<MovieDetails moviesDetails={moviesDetails} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
