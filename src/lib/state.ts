import { createContext, useContext } from "react";

export type StepChoice = {
  step: number;
  optionIndex: number;
};

export interface StateContextType {
  choices: (number | null)[]; // index de l'option choisie pour chaque étape
  setChoice: (step: number, optionIndex: number) => void;
  reset: () => void;
}

export const STEPS_COUNT = 4;
export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

export function useStateContext() {
  const ctx = useContext(StateContext);
  if (!ctx)
    throw new Error("useStateContext must be used within a StateProvider");
  return ctx;
}
