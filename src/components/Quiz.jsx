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
  const [isShowAnswers, setIsShowAnswers] = useState(false);
  const [resetQuiz, setResetQuiz] = useState(0);

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
              return {
                value: answer,
                id: nanoid(),
                isHeld: false,
                isCorrect: false,
              };
            });
            const correct = {
              value: question.correct_answer,
              id: nanoid(),
              isHeld: false,
              isCorrect: true,
            };
            
            let allAnswersArr = [...incorrect];
            const randomNum = Math.floor(Math.random() * 4);
            allAnswersArr.splice(randomNum, 0, correct);
            
            return { ...question, allAnswers: allAnswersArr, id: nanoid() };
          });
        });
      })
      .catch((error) => console.log(error));
    }, [amountOfQuestions, category, difficulty,resetQuiz]);
    
    if (!quizData.length) return <Loader />;

  const questionElements = quizData.map((question, index) => {
    return (
      <Question
        key={nanoid()}
        question={question.question}
        allAnswers={question.allAnswers}
        qID={question.id}
        questionIndex={index}
        isShowAnswers={isShowAnswers}
        updateHeld={updateHeld}
      />
    );
  });

  // important ?????????????????????????????????????????????????????????????????????
  function updateHeld(qID, aID) {
    setQuizData((prevQuizData) => {
      return prevQuizData.map((question) => {
        if (qID !== question.id) {
          return question;
        } else {
          const newAnswers = question.allAnswers.map((answer) => {
            return answer.id === aID
              ? { ...answer, isHeld: !answer.isHeld }
              : { ...answer, isHeld: false };
          });

          return { ...question, allAnswers: newAnswers };
        }
      });
    });
  }
  function checkAnswers() {
    setIsShowAnswers(true);
  }
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: window.innerWidth > 600 ? 'auto' : 'smooth',
    });
};

function reset() {
    setIsShowAnswers(false);
    setResetQuiz(prev => prev + 1);
    goToTop();    
}
  let score = 0
  if(isShowAnswers){
    quizData.map((question) => {
        return question.allAnswers.forEach(answer => {
            return answer.isHeld && answer.isCorrect ? score++ : score;
        });
    });
}
  let buttonElements = !isShowAnswers 
  ? 
  
     <button className="btn " onClick={checkAnswers}>Check Answers</button>
  :
  <div className='final-footer'>
      <p className='quiz__finalText'>{`You scored ${score}/${formData.amountOfQuestions}`}</p>
      <button className='btn play-again-btn' onClick={reset}>Play Again</button>
  </div>;    
  return (
    <>
      <Link to="/">
        <AiOutlineHome className="icon home-icon" fontSize="2.3rem" />
      </Link>
      <div className="quiz">
        <h1 className="quiz-topic">Quizzical</h1>
        <div>{questionElements}</div>
        <div className="btn-check">{buttonElements}</div>
        
      </div>
    </>
  );
};

export default Quiz;
