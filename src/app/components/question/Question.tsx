import React from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className=" mx-40">
      <h1 className="font-bold text-3xl pt-10">{question}</h1>
      <p className="text-sm my-6">{answer}</p>
    </div>
  );
};
