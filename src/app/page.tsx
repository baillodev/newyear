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
    <div className="relative h-svh w-full bg-[#111] overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />

      <div className="relative h-full z-10 flex flex-col items-center justify-center gap-12.5">
        <NumberBlocks active={active} />
        
        <h2 
          className={clsx(
            "text-[#252525] text-3xl text-center transition duration-500 cursor-pointer select-none after:content-[''] after:transition after:duration-500",
            active && "text-white [text-shadow:0_0_20px_#fff,0_0_50px_#fff] after:text-[#32ed4e] after:[text-shadow:0_0_20px_#32ed4e,0_0_50px_#32ed4e]"
          )}
          onClick={toggleActive}
        >
          Happy New Year <span className="text-[#32ed4e]">2026</span>
        </h2>
      </div>
    </div>
  );
}