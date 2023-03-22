import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
const About = (props) => {
  const styles = {
    left: props.isOpen ? 0 : "-100%",
  };

  // it works but the about button dosen't work any more
  // const modalRef = useRef(null);
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       props.setIsOpen(false);
  //     }
  //   }
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);
  return (
    <div 
    className="about" 
    style={styles} 
    // ref={modalRef}
    >
      <AiOutlineClose
        fontSize="1.5rem"
        className="close-icon"
        onClick={props.handleModalOpen}
      />
      <article>
        <h3>What is Quizzical?</h3>
        <p>
          Quizzical is a web based quiz game, where you can test your trivia
          skills!
        </p>
      </article>
      <article>
        <h3>What questions can I answer?</h3>
        <p>
          You can personalize your game based on number of questions, category
          and difficulty.
        </p>
      </article>
      <article>
        <h3>Who wrote these questions?</h3>
        <p>
          Quizzical is powered by the{" "}
          <a href="https://opentdb.com/">Open Trivia Database API</a>, a
          database of freely available questions to use for programmers.
        </p>
      </article>
      <article>
        <h3>Who made Quizzical?</h3>
        <p>
          Hi! I’m Sajad, a web developer 👋. You can check more of my work{" "}
          <a href="https://github.com/sajadzshoki">here</a>.
        </p>
      </article>
    </div>
  );
};

export default About;
