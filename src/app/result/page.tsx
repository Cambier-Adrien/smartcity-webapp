"use client";
import { useStateContext } from "../../lib/state";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

const interpretations = [
  {
    min: 5,
    max: 6,
    emoji: "🎉",
    message:
      "Bravo ! Votre ville est clairement engagée dans une démarche de Smartcity écologique.",
  },
  {
    min: 3,
    max: 4,
    emoji: "🚀",
    message:
      "Votre ville a amorcé sa transition intelligente. Elle est en bonne voie !",
  },
  {
    min: 0,
    max: 2,
    emoji: "🧱",
    message:
      "Votre ville reste très classique… Peut-être est-il temps de pousser à l'action citoyenne ?",
  },
];

function interpretScore(score: number) {
  return (
    interpretations.find((i) => score >= i.min && score <= i.max) ||
    interpretations[2]
  );
}

export default function ResultPage() {
  const { choices, reset } = useStateContext();
  const router = useRouter();
  // Score = nombre de réponses A ou B (index 0 ou 1)
  const score = choices.filter((idx) => idx === 0 || idx === 1).length;
  const interp = interpretScore(score);

  const handleRestart = () => {
    reset();
    router.push("/question/1");
  };

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          title={
            <span className="text-2xl font-bold text-accent-blue">
              Score : {score} / 6
            </span>
          }
          description={
            <span className="text-lg font-semibold mt-2 block">
              {interp.emoji} {interp.message.replace(/'/g, "&apos;")}
            </span>
          }
          className="w-full max-w-md mx-auto"
        />
        <div className="flex flex-col md:flex-row gap-4 mt-2 justify-center">
          <Button
            onClick={handleRestart}
            className="text-base md:text-lg px-8 py-4 rounded-full"
          >
            Recommencer
          </Button>
          <Button
            onClick={() =>
              navigator.share?.({
                title: "Quiz Smartcity",
                text: interp.message,
                url: window.location.href,
              })
            }
            className="text-base md:text-lg px-8 py-4 rounded-full"
          >
            Partager
          </Button>
        </div>
        <Link
          href="/"
          className="mt-6 text-accent-blue underline text-base font-medium"
        >
          Retour à l&apos;accueil
        </Link>
      </motion.div>
    </Section>
  );
}
