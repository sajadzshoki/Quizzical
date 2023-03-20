import React from "react";
import { nanoid } from "nanoid";
import he from "he";
const Question = (props) => {
  const { allAnswers, question} = props;
// ?????? agar x ro nadi render nmigire va error "Uncaught TypeError: Cannot read properties of undefined (reading 'value')Uncaught TypeError: Cannot read properties of undefined (reading 'value') at Question.jsx:9:1" ro mide
  const answerButtons = allAnswers.map((x,index) => {
    return (
      <button key={nanoid()}className="btn-answer">
        
        {he.decode(allAnswers[index].value)}
      </button>
    );
  });
  return (
    <div className="question-container">
      <h3>{he.decode(question)}</h3>
      <div>{answerButtons}</div>
    </div>
  );
};

export default Question;
