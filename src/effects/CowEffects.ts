import { useEffect } from "react";
import { CowService } from "../services/CowService";
import { useCowStore } from "../stores/useCowStore";

export const CowGeneratingEffects = () => {
  const { addCow } = useCowStore();

  const SetupGenerating = () => {
    const first = CowService.generate();
    addCow(first);

    const second = CowService.generate();
    addCow(second);
  };

  useEffect(() => {
    SetupGenerating();
  }, []);
};

export const CowPrintingEffects = () => {
  const { cows } = useCowStore();

  useEffect(() => {
    if (cows.length == 0) return;
    cows.map(cow => console.log(cow));
  }, [cows]);
};