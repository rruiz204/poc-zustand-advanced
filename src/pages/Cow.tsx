import { CowCard } from "../components/CowCard";
import { useCowStore } from "../stores/useCowStore";

import {
  CowPrintingEffects,
  CowGeneratingEffects,
} from "../effects/CowEffects";

export const Cow = (): JSX.Element => {
  const cows = useCowStore((state) => state.cows);

  CowGeneratingEffects();
  CowPrintingEffects();

  return (
    <div className="w-screen h-screen p-10 bg-[#0b1120] text-white">
      <h1 className="text-3xl font-semibold mb-4">Cow Page</h1>

      <div className="border-2 border-white rounded-md p-4 w-min flex gap-4">
        {
          cows.map((cow) => (
            <CowCard race={cow.race} color={cow.color} key={cow.code}></CowCard>
          ))
        }
      </div>
    </div>
  );
};