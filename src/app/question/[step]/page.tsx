"use client";
import { useParams } from "next/navigation";
import QuestionStepClient from "./question-step-client";
import { useState, useEffect } from "react";

export default function QuestionStepPage() {
  const params = useParams() as { step: string };
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  if (!questions.length) return null; // ou un loader

  return <QuestionStepClient questions={questions} step={params.step} />;
}
