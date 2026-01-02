import { NumberBlockProps } from "@/types/number-blocks.types";
import clsx from "clsx";

export function NumberBlock({
    values,
    index,
    totalBlocks
} : NumberBlockProps) {
    return (
        <div
            style={{"--j": index} as React.CSSProperties}
            className="relative w-25 h-25 transform-3d transition ease-in-out duration-[2.5s] delay-[calc(0.25s*var(--j))] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#373737] before:rotate-y-90 before:-translate-x-12.5 last:before:bg-[#11a728] [.active>&]:rotate-x-[calc(-360deg*1)] [.active>&]:last:rotate-x-[calc(-630deg*1)]"
        >
            {values.map((value, i) => {
                return (
                    <span
                        key={i}
                        style={{ "--i": i } as React.CSSProperties}
                        className={clsx(
                            "absolute top-0 left-0 w-full h-full font-light text-7xl flex justify-center items-center transform-3d transform-[rotateX(calc(90deg*var(--i)))_translateZ(50px)]",
                            index === totalBlocks - 1
                                ? "bg-linear-to-b from-[#29c040] to-[#32ed4e] before:bg-[#11a728]"
                                : "bg-linear-to-b from-[#434343] to-[#535353]"
                        )}
                    >
                        {value}
                    </span>
                );
            })}
        </div>
    );
}