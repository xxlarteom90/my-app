// import React from 'react'

import { QuestionCard } from "../../components/QuestionCard";

// interface Props {}

export const HomePage = () => {
  const questionsList = [
    {
      questionText: "Question1",
      answerText: "Answer1",
    },
    {
      questionText: "Question2",
      answerText: "Answer2",
    },
    {
        questionText: "Question3",
        answerText: "Answer3",
      },
  ];
  return (
    <>
      <div className="p-5">
        <QuestionCard questionList={questionsList} />
      </div>
    </>
  );
};
