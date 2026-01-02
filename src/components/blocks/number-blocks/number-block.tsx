import { NumberBlockProps } from "@/types/number-blocks.types";

export function NumberBlock({
    values,
    index,
} : NumberBlockProps) {
    return (
        <div
            style={{"--j": index} as React.CSSProperties}
            className="relative w-25 h-25 transform-3d transition ease-in-out duration-[2.5s] delay-[calc(0.25s*var(--j))] before:content-[''] before:absolute before:w-full before:h-full before:bg-[#373737] before:origin-left before:rotate-y-90 before:-translate-x-12.5 last:before:bg-[#11a728] [.active>&]:rotate-x-[calc(-360deg*1)] [.active>&]:last:rotate-x-[calc(-630deg*1)]"
        >
            {values.map((value, i) => (
                <span
                    key={i}
                    style={{ "--i": i } as React.CSSProperties}
                    className="absolute top-0 left-0 w-full h-full [background:linear-gradient(to_bottom,#434343,#535353)] font-light text-7xl flex justify-center items-center transform-3d rotate-x-[calc(90deg*var(--i))] translate-z-12.5 last:[background:linear-gradient(to_bottom,#29c040,#32ed4e)] last:before:[background:#11a728]"
                >
                    {value}
                </span>
            ))}
        </div>
    );
}