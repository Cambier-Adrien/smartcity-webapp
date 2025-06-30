"use client";
import { useRouter } from "next/navigation";
import { useStateContext } from "../../../lib/state";
import { motion } from "framer-motion";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Grid from "@/components/ui/grid";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

interface Question {
  question: string;
  choices: string[];
  info: string;
}

export default function QuestionStepClient({
  questions,
  step,
}: {
  questions: Question[];
  step: string;
}) {
  const { choices, setChoice } = useStateContext();
  const router = useRouter();
  const stepIndex = parseInt(step, 10) - 1;
  const questionObj = questions[stepIndex];
  if (!questionObj) return null;

  const handleSelect = (optionIdx: number) => {
    setChoice(stepIndex, optionIdx);
    if (stepIndex < questions.length - 1) {
      router.push(`/question/${stepIndex + 2}`);
    } else {
      router.push("/result");
    }
  };

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="w-full">
          <Title level={2} className="text-center mb-1">
            {questionObj.question}
          </Title>
        </Card>
        <Grid className="gap-4">
          {questionObj.choices.map((choice: string, idx: number) => (
            <Button
              key={choice}
              variant="choice"
              selected={choices[stepIndex] === idx}
              className="w-full text-base md:text-lg py-3"
              onClick={() => handleSelect(idx)}
            >
              {choice}
            </Button>
          ))}
        </Grid>
        <div className="mt-4 w-full">
          <div className="bg-gray-50 rounded-xl p-5 text-gray-700 text-center shadow-sm">
            <span className="block text-accent-blue font-semibold mb-1 text-sm uppercase tracking-wide">
              Le saviez-vous ?
            </span>
            <span className="text-base md:text-lg">{questionObj.info}</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
