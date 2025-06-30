"use client";
import { useState, ReactNode } from "react";
import { StateContext, STEPS_COUNT } from "./state";

export default function StateProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  const [choices, setChoices] = useState<(number | null)[]>(
    Array(STEPS_COUNT).fill(null)
  );

  const setChoice = (step: number, optionIndex: number) => {
    setChoices((prev) => {
      const updated = [...prev];
      updated[step] = optionIndex;
      return updated;
    });
  };

  const reset = () => setChoices(Array(STEPS_COUNT).fill(null));

  return (
    <StateContext.Provider value={{ choices, setChoice, reset }}>
      {children}
    </StateContext.Provider>
  );
}
