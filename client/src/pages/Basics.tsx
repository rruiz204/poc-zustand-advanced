import { useState, useEffect } from "react";

export const Basics = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Counter value: " + count);
  }, [count]);

  return (
    <div className="w-screen h-screen p-10 bg-[#0b1120] text-white">
      <p className="text-3xl font-semibold mb-2">Basics Page</p>
      <hr className="mb-6" />

      <p className="mb-4">Count: {count}</p>
      <div className="flex gap-5">
        <button onClick={() => setCount(count + 1)} className="border-2 border-white py-2 px-4 rounded-md">Increment</button>
        <button onClick={() => setCount(count - 1)} className="border-2 border-white py-2 px-4 rounded-md">Decrement</button>
      </div>
    </div>
  );
};