import React, { useState } from "react";
import QuestionList from "./QuestionList";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Quiz = ({ name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState();
  const selectOne = (e) => {
    setSelect(e.target.value);
    console.log(select);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    setSelect(" ");
  };
  const handleNext = () => {
    const nextQuetions = currentQuestion + 1;
    if (select === undefined) {
      alert("please select any one options");
    } else if (nextQuetions < QuestionList.length) {
      setCurrentQuestion(nextQuetions);
      setSelect(undefined);
    } else {
      setShowScore(true);
    }
  };
  const history = useHistory();
  const reTake_quiz = () => {
    history.push("/");
  };

  return (
    <>
      <div className="quiz_page_header pb-4 pt-4">
        <h1 className="header text-center opacity-75 ">
          LET'S TEST YOUR KNOWLEDGE
        </h1>
      </div>
      <div className="mt-5 mb-5 quiz_page_welcome   ">
        <h1 className="text-center">welcome, {name}</h1>
      </div>

      <div className="app">
        {showScore ? (
          <div className="score_section text-center text-black-50">
            You scored {score} out of {QuestionList.length}
            <div className="mt-5 ">
              <Button onClick={reTake_quiz} variant="contained">
                ReTake Quiz
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="question_section text-center">
              <div className="question_count">
                <span>Question {currentQuestion + 1}</span>/
                {QuestionList.length}
              </div>
              <div className="question-text">
                {QuestionList[currentQuestion].questionText}
              </div>
            </div>
            <div className=" answer-section mt-5 d-flex justify-content-around align-items-center flex-column">
              {QuestionList[currentQuestion].answerOptions.map(
                (answerOptions) => (
                  <div class="w-50 option_section form-check  d-flex justify-content-start align-items-start  flex-row ">
                    <input
                      type="radio"
                      value={select}
                      name="inlineRadioOptions"
                      checked={select}
                      //id="inlineRadio1"
                      onChange={selectOne}
                      className=" me-2 form-check-input  "
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    />

                    <label class="form-check-label" for="inlineRadio1">
                      {answerOptions.answerText}
                    </label>
                  </div>
                )
              )}
            </div>
            <div className="text-center">
              <button
                onClick={handleNext}
                class=" Lock_btn  w-50 btn mt-5 text-center btn-info"
                type="button"
              >
                Lock
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
