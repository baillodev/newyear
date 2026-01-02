import { NUMBER_BLOCKS } from "@/constants/number-blocks.constants";
import { NumberBlock } from "./number-block";
import { NumberBlocksProps } from "@/types/number-blocks.types";
import clsx from "clsx";


export function NumberBlocks({ active }: NumberBlocksProps) {
    return(
        <div 
            className={clsx(
                "flex gap-2.5 transform-3d rotate-y-30 rotate-x-10",
                active && "active"
            )}
        >
            {NUMBER_BLOCKS.map((values, index) => (
                <NumberBlock
                    key={index}
                    values={values}
                    index={index}
                    totalBlocks={NUMBER_BLOCKS.length}
                />
            ))}
        </div>
    );
}