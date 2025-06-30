import fs from "fs";
import path from "path";
import QuestionStepClient from "./question-step-client";

interface Question {
  question: string;
  choices: string[];
  info: string;
}

export default async function QuestionStepPage({
  params,
}: {
  params: { step: string };
}) {
  const filePath = path.join(process.cwd(), "public", "questions.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const questions: Question[] = JSON.parse(file);
  return <QuestionStepClient questions={questions} step={params.step} />;
}
