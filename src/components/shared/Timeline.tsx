import { useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
    type Variants,
} from "motion/react";
import { Location, ExportSquare, type Icon } from "iconsax-react";
import TimelineDecor from "@shared/TimelineDecor";

export type TimelineEntry = {
    title: string;
    subtitle?: string;
    description?: string;
    meta: string[];
    location?: string;
    link?: { label: string; href: string };
    logo?: string;
    badge?: string;
    icon?: Icon;
};

type Props = {
    id: string;
    heading: string;
    entries: TimelineEntry[];
    defaultIcon: Icon;
    decor?: boolean;
};

const cardV: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const badgeV: Variants = {
    hidden: { scale: 0.3, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 380, damping: 22, delay: 0.05 },
    },
};

export default function Timeline({ id, heading, entries, defaultIcon, decor }: Props) {
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
        <section id={id} className="relative w-full scroll-mt-24">
            {decor && <TimelineDecor />}

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
                <div className="pointer-events-none absolute top-6 bottom-6 left-5 w-px">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0_2px,transparent_2px_8px)]" />
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
                        const Ico = item.icon ?? defaultIcon;

                        return (
                            <motion.div
                                key={i}
                                variants={cardV}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                                className="relative pl-14 md:pl-18"
                            >
                                {/* node badge */}
                                <motion.span
                                    variants={badgeV}
                                    className={`absolute top-4 left-5 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-xl border transition-colors duration-500 md:top-4.5 md:h-10 md:w-10 ${
                                        active
                                            ? "border-custom-purple/40 bg-custom-purple/15 text-custom-purple shadow-[0_0_0_4px_rgba(117,95,255,0.10)]"
                                            : "border-white/10 bg-primary text-snow/40"
                                    }`}
                                >
                                    <Ico
                                        size={18}
                                        variant={active ? "Bold" : "Linear"}
                                        color="currentColor"
                                    />
                                    {item.badge && (
                                        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-purple opacity-70" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-custom-purple ring-2 ring-black" />
                                        </span>
                                    )}
                                </motion.span>

                                <div className="rounded-2xl border border-white/6 bg-white/2 p-4 transition-colors duration-300 hover:border-white/12 hover:bg-white/4 md:p-5">
                                    <div className="flex flex-col gap-x-6 gap-y-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex min-w-0 gap-3.5">
                                            {item.logo && (
                                                <img
                                                    src={item.logo}
                                                    alt={`${item.title} logo`}
                                                    loading="lazy"
                                                    className="mt-0.5 h-10 w-10 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
                                                />
                                            )}

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

                                                {(item.location || item.link) && (
                                                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-snow/45">
                                                        {item.location && (
                                                            <span className="inline-flex items-center gap-1">
                                                                <Location
                                                                    size={13}
                                                                    variant="Bold"
                                                                    color="currentColor"
                                                                />
                                                                {item.location}
                                                            </span>
                                                        )}
                                                        {item.link && (
                                                            <a
                                                                href={item.link.href}
                                                                target="_blank"
                                                                rel="noreferrer noopener"
                                                                className="inline-flex items-center gap-1 rounded-full border border-custom-purple/20 bg-custom-purple/5 px-2 py-0.5 text-custom-purple/85 transition-colors hover:border-custom-purple/40 hover:bg-custom-purple/10 hover:text-custom-purple"
                                                            >
                                                                <ExportSquare
                                                                    size={12}
                                                                    color="currentColor"
                                                                />
                                                                {item.link.label}
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
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

                                    {item.description && (
                                        <p className="mt-3 max-w-2xl text-sm leading-7 text-snow/55">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
