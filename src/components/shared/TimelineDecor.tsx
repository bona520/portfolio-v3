import type { ComponentType, CSSProperties, SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import ReactJS from "@svg/ReactJS";
import NextJS from "@svg/NextJS";
import Figma from "@svg/Figma";
import Tailwind from "@svg/Tailwind";
import TypeScript from "@svg/Typescript";

type Blob = {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    pos: CSSProperties;
    size: number;
    /** seconds for one full drift cycle */
    dur: number;
    delay: number;
    /** diagonal path the shape glides along, then eases back */
    travel: { x: number; y: number };
    spin: number;
};

// hand-placed in the section's margins — each glides along a diagonal path on a loop
const BLOBS: Blob[] = [
    { Icon: ReactJS, pos: { top: "2%", right: "4%" }, size: 96, dur: 26, delay: 0, travel: { x: -110, y: 90 }, spin: 8 },
    { Icon: Figma, pos: { top: "23%", left: "-2%" }, size: 60, dur: 22, delay: 1.4, travel: { x: 140, y: -70 }, spin: -12 },
    { Icon: NextJS, pos: { top: "48%", right: "9%" }, size: 78, dur: 30, delay: 0.7, travel: { x: 80, y: 120 }, spin: 6 },
    { Icon: Tailwind, pos: { top: "67%", left: "3%" }, size: 88, dur: 24, delay: 2, travel: { x: 150, y: -110 }, spin: -8 },
    { Icon: TypeScript, pos: { top: "85%", right: "5%" }, size: 56, dur: 28, delay: 1, travel: { x: -90, y: -80 }, spin: 10 },
];

export default function TimelineDecor() {
    const reduce = useReducedMotion();

    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
        >
            {BLOBS.map(({ Icon, pos, size, dur, delay, travel, spin }, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ ...pos, width: size, height: size }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: delay * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="h-full w-full opacity-[0.13] blur-[0.5px]"
                        animate={
                            reduce
                                ? undefined
                                : {
                                      x: [0, travel.x, 0],
                                      y: [0, travel.y, 0],
                                      rotate: [0, spin, -spin / 2, 0],
                                  }
                        }
                        transition={{
                            duration: dur,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay,
                        }}
                    >
                        <Icon className="h-full w-full" />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
