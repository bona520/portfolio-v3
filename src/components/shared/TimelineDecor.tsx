import type { ComponentType, SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import ReactJS from "@svg/ReactJS";
import NextJS from "@svg/NextJS";
import NestJS from "@svg/NestJS";
import TypeScript from "@svg/Typescript";
import Tailwind from "@svg/Tailwind";
import Photoshop from "@svg/PhotoShop";
import Illustrator from "@svg/Illstrator";
import Figma from "@svg/Figma";

// tech logos ride one orbit whose centre is pinned to the right edge, so only
// the inner arc shows — a slow, calm rotation carrying them through the gutter
const RING: { Icon: ComponentType<SVGProps<SVGSVGElement>>; size: number }[] = [
    { Icon: ReactJS, size: 80 },
    { Icon: NextJS, size: 80 },
    { Icon: TypeScript, size: 80 },
    { Icon: Tailwind, size: 90 },
    { Icon: Photoshop, size: 88 },
    { Icon: Figma, size: 88 },
    { Icon: NestJS, size: 80 },
    { Icon: Illustrator, size: 90 },
];

const RADIUS = 250; // px — orbit radius; the centre sits on the right edge
const SPIN = 88; // seconds per revolution

export default function TimelineDecor() {
    const reduce = useReducedMotion();
    const step = 360 / RING.length;

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block [-webkit-mask-composite:source-in] [-webkit-mask-image:radial-gradient(520px_540px_at_100%_50%,#000_66%,transparent_100%),linear-gradient(to_right,#000_82%,transparent_99%)] [mask-composite:intersect] [mask-image:radial-gradient(520px_540px_at_100%_50%,#000_66%,transparent_100%),linear-gradient(to_right,#000_82%,transparent_99%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
        >
            {/* orbit anchor — centre pinned to the right edge, vertically centred */}
            <div className="absolute top-1/2 right-0">
                <div
                    className="absolute rounded-full border border-white/[0.07]"
                    style={{ width: RADIUS * 2, height: RADIUS * 2, left: -RADIUS, top: -RADIUS }}
                />

                {/* the ring — one continuous loop, carrying logos down the visible arc */}
                <motion.div
                    className="absolute"
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={reduce ? undefined : { rotate: -360 }}
                    transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
                >
                    {RING.map(({ Icon, size }, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${i * step}deg) translateY(-${RADIUS}px)`,
                            }}
                        >
                            {/* counter-spin keeps the logo upright as it orbits */}
                            <motion.div
                                style={{ originX: 0.5, originY: 0.5 }}
                                animate={reduce ? undefined : { rotate: 360 }}
                                transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
                            >
                                <div style={{ transform: `rotate(${-i * step}deg)` }}>
                                    <motion.div
                                        style={{ width: size, height: size }}
                                        animate={
                                            reduce
                                                ? { opacity: 0.36 }
                                                : { opacity: [0.28, 0.46, 0.28] }
                                        }
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.7,
                                        }}
                                    >
                                        <Icon className="h-full w-full" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
