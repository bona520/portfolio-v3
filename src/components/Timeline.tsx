import { useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
    type Variants,
} from "motion/react";

export type TimelineEntry = {
    title: string;
    subtitle?: string;
    meta: string[];
    badge?: string;
};

type Props = {
    id: string;
    heading: string;
    entries: TimelineEntry[];
};

const cardV: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Timeline({ id, heading, entries }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start 60%", "end 65%"],
    });
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.4,
    });
    const headTop = useTransform(progress, [0, 1], ["0%", "100%"]);

    const [passed, setPassed] = useState(0);
    useMotionValueEvent(progress, "change", (v) => {
        setPassed(Math.round(v * entries.length));
    });

    return (
        <section id={id} className="w-full scroll-mt-24">
            <motion.h1
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-bold lg:text-4xl"
            >
                {heading}
            </motion.h1>

            <div ref={trackRef} className="relative mt-8 md:mt-12">
                {/* rail */}
                <div className="pointer-events-none absolute top-3 bottom-3 left-1.75 w-px md:left-2">
                    <div className="absolute inset-0 bg-white/10" />
                    <motion.div
                        style={{ scaleY: progress }}
                        className="absolute inset-0 origin-top bg-linear-to-b from-custom-purple to-custom-purple/30"
                    />
                    <motion.div
                        style={{ top: headTop }}
                        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-custom-purple shadow-[0_0_10px_2px_rgba(117,95,255,0.5)]"
                    />
                </div>

                <div className="space-y-3 md:space-y-4">
                    {entries.map((item, i) => {
                        const active = i < passed || i < 1;

                        return (
                            <motion.div
                                key={i}
                                variants={cardV}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                                className="relative pl-9 md:pl-12"
                            >
                                {/* node */}
                                <motion.span
                                    initial={{ scale: 0.3, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                                    className={`absolute top-5.5 left-1.75 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-colors duration-500 md:left-2 ${
                                        active
                                            ? "border-custom-purple bg-custom-purple shadow-[0_0_0_4px_rgba(117,95,255,0.15)]"
                                            : "border-white/20 bg-primary"
                                    }`}
                                >
                                    {item.badge && (
                                        <span className="absolute inset-0 animate-ping rounded-full bg-custom-purple opacity-60" />
                                    )}
                                </motion.span>

                                <div className="rounded-2xl border border-white/6 bg-white/2 p-4 transition-colors duration-300 hover:border-white/12 hover:bg-white/4 md:p-5">
                                    <div className="flex flex-col gap-x-6 gap-y-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                                                <h3 className="text-base font-semibold text-white md:text-lg">
                                                    {item.title}
                                                </h3>
                                                {item.badge && (
                                                    <span className="rounded-full border border-custom-purple/30 bg-custom-purple/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-custom-purple uppercase">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                            {item.subtitle && (
                                                <p className="mt-1.5 text-sm text-snow/65 md:text-[15px]">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <div className="shrink-0 text-xs text-snow/40 sm:text-right md:text-[13px]">
                                            {item.meta.map((m, mi) => (
                                                <span
                                                    key={mi}
                                                    className={`block ${mi === 0 ? "text-snow/55" : "mt-0.5"}`}
                                                >
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
