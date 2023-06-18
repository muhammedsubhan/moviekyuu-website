import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navabr";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import MyList from "./pages/MyList/MyList";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Search from "./components/search/Search";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
