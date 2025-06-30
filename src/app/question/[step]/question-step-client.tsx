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
  const { setChoice } = useStateContext();
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
        <Card>
          <Title level={2} className="text-center mb-1">
            {questionObj.question}
          </Title>
        </Card>
        <Grid className="gap-4">
          {questionObj.choices.map((choice: string, idx: number) => (
            <Button
              key={choice}
              variant="choice"
              className="w-full text-base md:text-lg py-3"
              onClick={() => handleSelect(idx)}
            >
              {choice}
            </Button>
          ))}
        </Grid>
        <div className="mt-4 w-full">
          <Card className="w-full text-center">
            <Title level={3}>Le saviez-vous ?</Title>
            <span className="text-base text-gray-700">{questionObj.info}</span>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
}
