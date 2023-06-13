import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navabr";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
