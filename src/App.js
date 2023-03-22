import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [formData, setFormData] = useState({
    category: "any",
    difficulty: "",
    answerType: "",
    amountOfQuestions: "5",
  });


  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(prev => !prev)
  };


  function handleFormChange(e) {
    const { name, value } = e.target;
    // ???????
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <Router>
      <div className="App">
        <About isOpen={isOpen} setIsOpen={setIsOpen}handleModalOpen={handleModalOpen}/>
        <div className="main-card">
          <Routes>
            <Route
              path="/"
              element={
                <Home formData={formData} handleFormChange={handleFormChange} handleModalOpen={handleModalOpen}/>
              }
            />
            <Route path="/quiz" element={<Quiz formData={formData} />} />
          </Routes>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </Router>
  );
};

export default App;
