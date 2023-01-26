//api generator :  https://opentdb.com/api_config.php
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
// import he from 'he';
const Quiz = () => {
  const [quizData, setQuizData] = useState([]);

  const url = "https://opentdb.com/api.php?amount=5&type=multiple";
  // const costumeUrl = "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data.results);
      });
  }, []);

  return (
    <>
      <Link to="/">
        <AiOutlineHome className="icon home-icon" fontSize="2.3rem" />
      </Link>
      <div className="quiz">
        <h1 className="quiz-topic">Quizzical</h1>

        <div className="question-container">
          <h3>1. {quizData[0]?.question}</h3>
          <button className="btn-answer">{quizData[0]?.correct_answer}</button>
          <button className="btn-answer">
            {quizData[0]?.incorrect_answers[0]}
          </button>
          <button className="btn-answer">
            {quizData[0]?.incorrect_answers[1]}
          </button>
          <button className="btn-answer">
            {quizData[0]?.incorrect_answers[2]}
          </button>
        </div>
        <div className="question-container">
          <h3>2. {quizData[1]?.question}</h3>
          <button className="btn-answer">{quizData[1]?.correct_answer}</button>
          <button className="btn-answer">
            {quizData[1]?.incorrect_answers[0]}
          </button>
          <button className="btn-answer">
            {quizData[1]?.incorrect_answers[1]}
          </button>
          <button className="btn-answer">
            {quizData[1]?.incorrect_answers[2]}
          </button>
        </div>
        <div className="question-container">
          <h3>3. {quizData[2]?.question}</h3>
          <button className="btn-answer">{quizData[2]?.correct_answer}</button>
          <button className="btn-answer">
            {quizData[2]?.incorrect_answers[0]}
          </button>
          <button className="btn-answer">
            {quizData[2]?.incorrect_answers[1]}
          </button>
          <button className="btn-answer">
            {quizData[2]?.incorrect_answers[2]}
          </button>
        </div>
        <div className="question-container">
          <h3>4. {quizData[3]?.question}</h3>
          <button className="btn-answer">{quizData[3]?.correct_answer}</button>
          <button className="btn-answer">
            {quizData[3]?.incorrect_answers[0]}
          </button>
          <button className="btn-answer">
            {quizData[3]?.incorrect_answers[1]}
          </button>
          <button className="btn-answer">
            {quizData[3]?.incorrect_answers[2]}
          </button>
        </div>
        <div className="question-container">
          <h3>5. {quizData[4]?.question}</h3>
          <button className="btn-answer">{quizData[4]?.correct_answer}</button>
          <button className="btn-answer">
            {quizData[4]?.incorrect_answers[0]}
          </button>
          <button className="btn-answer">
            {quizData[4]?.incorrect_answers[1]}
          </button>
          <button className="btn-answer">
            {quizData[4]?.incorrect_answers[2]}
          </button>
        </div>

        <button className="btn btn-check">Check Answers</button>
      </div>
    </>
  );
};

export default Quiz;
