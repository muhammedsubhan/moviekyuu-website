import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navabr";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MyList from "./components/MyList/MyList";
import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
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
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
