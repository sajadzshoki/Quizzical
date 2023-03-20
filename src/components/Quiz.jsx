//api generator :  https://opentdb.com/api_config.php
// const url = "https://opentdb.com/api.php?amount=5&type=multiple";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Question from "./Question";
import Loader from "./Loader";
// import he from 'he';
const Quiz = (props) => {
  const { formData } = props;
  const [quizData, setQuizData] = useState([]);

  const { amountOfQuestions, category, difficulty } = formData;

  useEffect(() => {
    let costumeUrl = `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
    if (category === "any") {
      costumeUrl = `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}&type=multiple`;
    }
    if (difficulty === "any") {
      costumeUrl = `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}&type=multiple`;
    }
    if (difficulty === "any" && category === "any") {
      costumeUrl = `https://opentdb.com/api.php?amount=${amountOfQuestions}&type=multiple`;
    }
    fetch(costumeUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuizData(() => {
          return data.results.map((question) => {
            const incorrect = question.incorrect_answers.map((answer) => {
              return { value: answer, id: nanoid() };
            });
            const correct = { value: question.correct_answer, id: nanoid() };

            let allAnswersArr = [...incorrect];
            const randomNum = Math.floor(Math.random() * 4);
            allAnswersArr.splice(randomNum, 0, correct);

            return { ...question, allAnswers: allAnswersArr, id: nanoid() };
          });
        });
      })
      .catch((error) => console.log(error));
  }, [amountOfQuestions, category, difficulty]);

  const questionElements = quizData.map((question, index) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        allAnswers={question.allAnswers}
        qID={question.id}
        questionIndex={index}
      />
    );
  });

  if (!quizData.length) return <Loader />;

  return (
    <>
      <Link to="/">
        <AiOutlineHome className="icon home-icon" fontSize="2.3rem" />
      </Link>
      <div className="quiz">
        <h1 className="quiz-topic">Quizzical</h1>
        <div>{questionElements}</div>
        <button className="btn btn-check">Check Answers</button>
      </div>
    </>
  );
};

export default Quiz;
