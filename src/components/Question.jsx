import React from "react";
import { nanoid } from "nanoid";
import he from "he";
const Question = (props) => {
  const { allAnswers, question, updateHeld ,qID,isShowAnswers} = props;
  // ?????? agar answer ro nadi render nmigire va error "Uncaught TypeError: Cannot read properties of undefined (reading 'value')Uncaught TypeError: Cannot read properties of undefined (reading 'value') at Question.jsx:9:1" ro mide
  const answerButtons = allAnswers.map((answer, index) => {
    let styles = {
      backgroundColor: answer.isHeld ? "var(--blue4)" : "none",
    };
    if(isShowAnswers) {
        if(answer.isHeld && answer.isCorrect){
            styles = { backgroundColor: '#94D7A2' ,border: 'none'};

        } else if (answer.isHeld && answer.isCorrect === false) {
            styles = { backgroundColor: '#F8BCBC', opacity: '70%',border: 'none' };

        } else if (answer.isCorrect) {
            styles = { backgroundColor: 'var(--blue4)',border: 'none'};

        } else if (answer.isCorrect === false) {
            styles = { opacity: '50%' };
        }
    }
    return (                                                                                                                                                                                                                              
      <button
        key={nanoid()}
        className="btn-answer"
        style={styles}
        onClick={() => updateHeld(qID, answer.id)}
      >
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
