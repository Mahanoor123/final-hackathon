import React from "react";
import Questioncard from "../../components/dashboard/Questioncard"

export const questions = [
  {
    _id: "ques1",
    title: "Website Redesign 2025",
    createdAt: "2025-07-01",
    color: "#FFD6A5",
  },
  {
     _id: "ques2",
    title: "Website Redesign 2025",
    createdAt: "2025-07-01",
    color: "#FFD6A5",
  },
  {
    _id: "ques3",
    title: "Website Redesign 2025",
    createdAt: "2025-07-01",
    color: "#FFD6A5",
  },
  {
     _id: "ques4",
    title: "Website Redesign 2025",
    createdAt: "2025-07-01",
    color: "#FFD6A5",
  }
];


const MyQuestions = () => {
  return (
    <div className="flex items-center gap-2">
      {questions.map((question) => (
        <Questioncard key={question._id} question = {question} />
      ))}
    </div>
  );
};

export default MyQuestions;
