import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const { handleFormChange, formData, handleModalOpen } = props;
  return (
    <div className="home">
      <h1>Quizzical</h1>
      <p className="header-text">The game you will love</p>

      <form className="form">
        <label htmlFor="amountOfQuestions">Amount of Questions</label>
        <select
          onChange={handleFormChange}
          value={formData.amountOfQuestions}
          name="amountOfQuestions"
          id="amountOfQuestions"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <label htmlFor="category">Category</label>
        <select
          onChange={handleFormChange}
          value={formData.category}
          name="category"
          id="category"
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theatres</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime & Manga</option>
          <option value="32">Cartoons & Animations</option>
        </select>

        <label htmlFor="difficulty">Difficulty</label>
        <select
          onChange={handleFormChange}
          value={formData.difficulty}
          name="difficulty"
          id="difficulty"
        >
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </form>
      <Link to="/quiz">
        <button className="btn play-btn">Play</button>
      </Link>
      <button className="btn about-btn" onClick={handleModalOpen}>
        About
      </button>
    </div>
  );
}

export default Home;
