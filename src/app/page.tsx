"use client";

import { NumberBlocks } from "@/components/blocks/number-blocks/number-blocks";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 h-svh">
      <NumberBlocks active={active} />
      <h2 
        className={clsx(
          "text-[#252525] text-4xl text-center transition duration-500 cursor-pointer after:content-[''] after:transition after:duration-500",
          active && "text-white [text-shadow:0_0_20px_#fff,0_0_50px_#fff] after:text-[#32ed4e] after:[text-shadow:0_0_20px_#32ed4e,0_0_50px_#32ed4e]"
        )}
        onClick={toggleActive}
      >
        Happy New Year <span className="text-[#32ed4e]">2026</span>
      </h2>
    </div>
  );
}
