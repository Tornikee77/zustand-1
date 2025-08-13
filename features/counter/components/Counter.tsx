"use client";

import React from "react";
import { useCounterStore } from "../store/countStore";

const Counter = () => {
  // ცუდი პრაქტიკა
  //   const { count, increment, decrement } = useCounterStore();

  // best practice
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-semibold text-3xl">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-red-500 text-white rounded-2xl"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-2xl"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
