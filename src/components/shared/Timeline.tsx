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
import KbachPattern from "@svg/KbachPattern";

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
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const nodeV: Variants = {
    hidden: { scale: 0.4, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 360, damping: 24, delay: 0.05 },
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
            {/* one decorative motif per section: orbiting logos where decor is on,
                otherwise the kbach texture filling the space beside the track */}
            {decor ? (
                <TimelineDecor />
            ) : (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block"
                >
                    <KbachPattern className="h-full w-full text-custom-purple/[0.055] [-webkit-mask-image:radial-gradient(52%_64%_at_48%_48%,#000,transparent_72%)] [mask-image:radial-gradient(52%_64%_at_48%_48%,#000,transparent_72%)]" />
                </div>
            )}

            <motion.h1
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-bold lg:text-4xl"
            >
                {heading}
            </motion.h1>

            <div ref={trackRef} className="relative mt-8 max-w-3xl md:mt-12">
                {/* rail */}
                <div className="pointer-events-none absolute top-6 bottom-10 left-6 w-0.5 -translate-x-1/2">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.22)_0_2.5px,transparent_2.5px_7px)]" />
                    <motion.div
                        style={{ scaleY: progress }}
                        className="absolute inset-0 origin-top bg-linear-to-b from-custom-purple to-custom-purple/25"
                    />
                    <motion.div
                        style={{ top: headTop }}
                        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-custom-purple shadow-[0_0_10px_2px_rgba(117,95,255,0.5)]"
                    />
                </div>

                <div className="space-y-7 md:space-y-9">
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
                                className="relative pl-16 md:pl-19"
                            >
                                {/* rail node — white tile holding the logo, or the icon */}
                                <motion.span
                                    variants={nodeV}
                                    className="absolute top-0.5 left-6 z-10 block h-11 w-11 -translate-x-1/2"
                                >
                                    <span
                                        className={`flex h-full w-full items-center justify-center overflow-hidden rounded-2xl shadow-[0_6px_18px_-6px_rgba(0,0,0,0.55)] ring-1 transition duration-500 ${
                                            item.badge
                                                ? "bg-custom-purple ring-custom-purple/50"
                                                : active
                                                  ? "bg-white ring-custom-purple/30"
                                                  : "bg-white ring-black/5"
                                        }`}
                                    >
                                        {item.logo ? (
                                            <img
                                                src={item.logo}
                                                alt={`${item.title} logo`}
                                                loading="lazy"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <Ico
                                                size={20}
                                                variant="Bold"
                                                color={item.badge ? "#ffffff" : "#161616"}
                                            />
                                        )}
                                    </span>
                                    {item.badge && (
                                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-custom-purple opacity-70" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-custom-purple ring-2 ring-black" />
                                        </span>
                                    )}
                                </motion.span>

                                <div className="group -mx-3 rounded-2xl px-3 py-2 transition-colors duration-300 hover:bg-white/3">
                                    {item.meta.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-medium tracking-wide text-snow/45 uppercase md:text-xs">
                                            <span className="text-snow/60">{item.meta[0]}</span>
                                            {item.meta[1] && (
                                                <span className="text-snow/35">· {item.meta[1]}</span>
                                            )}
                                            {item.badge && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-custom-purple/15 px-1.5 py-0.5 text-[10px] font-semibold text-custom-purple">
                                                    <span className="h-1 w-1 rounded-full bg-custom-purple" />
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight text-white md:text-base">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="mt-0.5 text-[13px] text-snow/55 md:text-sm">
                                            {item.subtitle}
                                        </p>
                                    )}

                                    {item.description && (
                                        <p className="mt-2 text-[13px] leading-6 text-snow/50">
                                            {item.description}
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
                                                    <ExportSquare size={12} color="currentColor" />
                                                    {item.link.label}
                                                </a>
                                            )}
                                        </div>
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
