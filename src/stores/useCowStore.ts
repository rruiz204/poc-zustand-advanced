import { create } from "zustand";
import { Cow } from "../models/Cow";

type State = {
  cows: Cow[];
};

type Actions = {
  addCow: (cow: Cow) => void;
  removeCow: (code: string) => void;
};

export const useCowStore = create<State & Actions>((set) => ({
  cows: [],

  addCow: (cow) => set((state) => ({ ...state, cows: [...state.cows, cow] })),

  removeCow: (code) => set((state) => {
    const updatedCows = state.cows.filter((c) => c.code != code);
    return { ...state, cows: updatedCows };
  }),
}));