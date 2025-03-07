import {Container } from "react-bootstrap";
// import { TextToggle } from "./TextToggle";
import { useState } from "react";

interface Question {
  questionText: string;
  answerText: string;
}

interface QuestionCardProps {
  questionList: Question[];
}

export function QuestionCard({ questionList }: QuestionCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuestionHidden, setIsQuestionHidden] = useState(false);
  const [isAnswerHidden, setIsAnswerHidden] = useState(true);

  const currentQuestion = questionList[currentQuestionIndex];
  const totalQuestion = questionList.length;

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestion - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsQuestionHidden(false);
      setIsAnswerHidden(true);
    }
  };

  const goToPriviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsQuestionHidden(false);
      setIsAnswerHidden(true);
    }
  };

  const toogleQuestion = () => {
    setIsQuestionHidden(!isQuestionHidden);
  };

  const toogleAnswer = () => {
    setIsAnswerHidden(!isAnswerHidden);
  };

  return (
    <>
      <Container className="col-12">
          <div>
            <button className="me-3" onClick={goToPriviousQuestion}>Privious</button>
            {currentQuestionIndex + 1} of {totalQuestion}
            <button className="mx-3" onClick={goToNextQuestion}>Next</button>
            <p className="text-center">Question</p>
            <button onClick={toogleQuestion}>
              {!isQuestionHidden ? "Hide" : "Show"}
            </button>
            {!isQuestionHidden && <p className="my-3">{currentQuestion.questionText}</p>}
            <p className="text-center">Answer</p>
            <button onClick={toogleAnswer}>
              {!isAnswerHidden ? "Hide" : "Show"}
            </button>
            {!isAnswerHidden && <p className="my-3">{currentQuestion.answerText}</p>}
          </div>
      </Container>
    </>
  );
}
