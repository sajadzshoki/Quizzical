//api generator :  https://opentdb.com/api_config.php
// const url = "https://opentdb.com/api.php?amount=5&type=multiple";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import he from "he";
import Question from "./Question";
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
  // useEffect(() => {
  //   // fetch(url)
  //   fetch(costumeUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuizData(data.results);
  //     });
  // }, [amountOfQuestions]);

  if (!quizData.length) return "loading . . . ";

  return (
    <>
      <Link to="/">
        <AiOutlineHome className="icon home-icon" fontSize="2.3rem" />
      </Link>
      <div className="quiz">
        <h1 className="quiz-topic">Quizzical</h1>
        <div>{questionElements}</div>

        {/* <div className="question-container"> */}
        {/* {quizData.map(question=><h3>{he.decode(question.question)}</h3>)}
        </div>
        {quizData.map(question=><button className="btn-answer">{question.correct_answer}</button>)} */}

        {/* <div className="question-container">
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
        </div> */}
        {/* <div className="question-container">
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
        </div> */}

        <button className="btn btn-check">Check Answers</button>
      </div>
    </>
  );
};

export default Quiz;
