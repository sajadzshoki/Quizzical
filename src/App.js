import React from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="main-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </Router>
  );
};

export default App;
