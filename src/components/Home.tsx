import { Fragment, useRef } from "react";
import { ArrowRight, ArrowDown2 } from "iconsax-react";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
    type MotionValue,
    type Variants,
} from "motion/react";
import ReactJS from "./svg/ReactJS";
import NextJS from "./svg/NextJS";
import NestJS from "./svg/NestJS";
import TypeScript from "./svg/Typescript";
import Tailwind from "./svg/Tailwind";
import Photoshop from "./svg/PhotoShop";
import Illustrator from "./svg/Illstrator";
import Figma from "./svg/Figma";
import KbachPattern from "./svg/KbachPattern";
import NagaHero from "./svg/NagaHero";
import PkaRomdoulHeroOne from "./svg/PkaRomdoulHeroOne";

const EASE = [0.22, 1, 0.36, 1] as const;

// `custom` is an explicit delay in seconds
const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.55, ease: EASE },
    }),
};

/** Kinetic type: each character slides up out of a clipped baseline. */
function RevealChars({
    text,
    className,
    delay = 0,
    stagger = 0.035,
}: {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}) {
    if (useReducedMotion()) return <span className={className}>{text}</span>;
    return (
        <span className={className} aria-label={text}>
            {Array.from(text).map((ch, i) => (
                <span
                    key={i}
                    aria-hidden
                    className="inline-block overflow-hidden pb-[0.12em] align-bottom"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "115%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: delay + i * stagger, duration: 0.7, ease: EASE }}
                    >
                        {ch === " " ? " " : ch}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

/** "Orn" bounces in letter-by-letter; "Bona" wipes open as a gradient with an underline draw. */
function NameHeadline() {
    const reduce = useReducedMotion();
    return (
        <span className="block" aria-label="Orn Bona">
            <RevealChars text="Orn" delay={0.32} stagger={0.05} />
            <span
                aria-hidden
                className="relative ml-[0.24em] inline-block pb-[0.14em] align-bottom"
            >
                <motion.span
                    className="inline-block bg-linear-to-r from-snow to-custom-purple bg-clip-text text-transparent"
                    initial={reduce ? false : { clipPath: "inset(0 105% -25% -5%)" }}
                    animate={reduce ? undefined : { clipPath: "inset(0 -5% -25% -5%)" }}
                    transition={{ delay: 0.5, duration: 0.75, ease: EASE }}
                >
                    Bona
                </motion.span>
                <motion.svg
                    aria-hidden
                    viewBox="0 0 200 14"
                    preserveAspectRatio="none"
                    className="absolute bottom-[-0.14em] left-0 h-[0.34em] w-full overflow-visible text-custom-purple drop-shadow-[0_2px_12px_rgba(117,95,255,0.45)]"
                >
                    <motion.path
                        d="M2 9C50 3 150 2 198 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                        animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { delay: 1.1, duration: 0.65, ease: EASE },
                            opacity: { delay: 1.1, duration: 0.01 },
                        }}
                    />
                </motion.svg>
            </span>
        </span>
    );
}

/**
 * Role line — two roles set apart by weight and colour, not decoration:
 * "Fullstack Developer" recedes, "UI/UX Designer" is bright with a small pen mark.
 */
function RoleLine({ className, delay = 0.95 }: { className?: string; delay?: number }) {
    const reduce = useReducedMotion();
    const label = "Fullstack Developer & UI/UX Designer";
    const lead: { w: string; c: string }[] = [
        { w: "Fullstack", c: "text-snow/75" },
        { w: "Developer", c: "text-snow/75" },
        { w: "/", c: "text-custom-purple" },
    ];

    return (
        <p className={className} aria-label={label}>
            {lead.map(({ w, c }, i) => (
                <Fragment key={i}>
                    <motion.span
                        className={`inline-block ${c}`}
                        initial={reduce ? false : { opacity: 0, y: 14 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ delay: delay + i * 0.06, duration: 0.45, ease: EASE }}
                    >
                        {w}
                    </motion.span>{" "}
                </Fragment>
            ))}
            <span className="relative inline-block font-semibold text-white">
                <motion.span
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.18, duration: 0.45, ease: EASE }}
                >
                    UI/UX&nbsp;Designer
                </motion.span>
                <svg
                    aria-hidden
                    viewBox="0 0 240 20"
                    preserveAspectRatio="none"
                    fill="none"
                    className="absolute bottom-[-0.14em] left-0 h-[0.36em] w-full overflow-visible text-custom-purple"
                >
                    {/* main stroke — wavy, with a little pen-lift hook at the end */}
                    <motion.path
                        d="M3 11C41 9 74 13 113 10C149 8 187 12 226 9C231 8.6 234 7.6 230 6.8"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                        animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { delay: delay + 0.82, duration: 0.5, ease: EASE },
                            opacity: { delay: delay + 0.82, duration: 0.01 },
                        }}
                    />
                    {/* faint second pass — a real marker never retraces itself exactly */}
                    <motion.path
                        d="M9 13C44 12 79 14.4 118 12.6C154 11 189 13.4 216 12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                        animate={reduce ? undefined : { pathLength: 1, opacity: 0.4 }}
                        transition={{
                            pathLength: { delay: delay + 1.12, duration: 0.32, ease: EASE },
                            opacity: { delay: delay + 1.12, duration: 0.01 },
                        }}
                    />
                </svg>
            </span>{" "}
            <motion.svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block h-[0.82em] w-[0.82em] translate-y-[-0.06em] text-custom-purple"
                initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -12 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                    delay: delay + 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
            >
                <path
                    d="M12 20h9"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </p>
    );
}

const TECH = [
    { name: "React", Icon: ReactJS },
    { name: "Next.js", Icon: NextJS },
    { name: "NestJS", Icon: NestJS },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Tailwind", Icon: Tailwind },
    { name: "Figma", Icon: Figma },
    { name: "Photoshop", Icon: Photoshop },
    { name: "Illustrator", Icon: Illustrator },
];

const FACTS = [
    { label: "Experience", value: "6+ years" },
    { label: "Based in", value: "Cambodia" },
    { label: "Focus", value: "Web apps & design" },
];

type Node = {
    name: string;
    Icon: (props: { style?: React.CSSProperties; className?: string }) => React.ReactElement;
    x: string;
    y: string;
    size: number;
    depth: number;
    dur: number;
};

// hand-placed, deliberately off-grid — spread across all four quadrants
const NODES: Node[] = [
    { name: "React", Icon: ReactJS, x: "0%", y: "2%", size: 104, depth: 22, dur: 7 },
    { name: "Next.js", Icon: NextJS, x: "60%", y: "0%", size: 68, depth: 12, dur: 8.5 },
    { name: "Figma", Icon: Figma, x: "33%", y: "15%", size: 72, depth: 15, dur: 9 },
    { name: "NestJS", Icon: NestJS, x: "72%", y: "23%", size: 112, depth: 28, dur: 6.4 },
    { name: "TypeScript", Icon: TypeScript, x: "3%", y: "35%", size: 82, depth: 8, dur: 9.5 },
    { name: "Illustrator", Icon: Illustrator, x: "40%", y: "43%", size: 78, depth: 13, dur: 10 },
    { name: "Photoshop", Icon: Photoshop, x: "65%", y: "57%", size: 92, depth: 20, dur: 8.2 },
    { name: "Tailwind", Icon: Tailwind, x: "9%", y: "65%", size: 88, depth: 17, dur: 7.8 },
];

const chipIn: Variants = {
    hidden: { opacity: 0, scale: 0.3, rotate: -14, filter: "blur(6px)" },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 220, damping: 15 },
    },
};

function NodeChip({
    node,
    mx,
    my,
    reduce,
}: {
    node: Node;
    mx: MotionValue<number>;
    my: MotionValue<number>;
    reduce: boolean;
}) {
    const { Icon, name, x, y, size, depth, dur } = node;
    const px = useSpring(useTransform(mx, [-1, 1], [-depth, depth]), {
        stiffness: 80,
        damping: 18,
    });
    const py = useSpring(useTransform(my, [-1, 1], [-depth, depth]), {
        stiffness: 80,
        damping: 18,
    });

    return (
        <motion.div
            className="group absolute"
            style={{
                left: x,
                top: y,
                width: size,
                height: size,
                x: reduce ? 0 : px,
                y: reduce ? 0 : py,
            }}
        >
            <motion.div variants={chipIn} className="h-full w-full">
                <motion.div
                    animate={
                        reduce ? undefined : { y: [0, -12, 0, 9, 0], rotate: [0, 3, 0, -3, 0] }
                    }
                    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
                    className="grid h-full w-full place-items-center transition-transform duration-300 group-hover:scale-110"
                >
                    <Icon
                        style={{ width: size, height: size }}
                        className="drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
                    />
                </motion.div>
            </motion.div>
            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-snow/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {name}
            </span>
        </motion.div>
    );
}

function TechConstellation() {
    const reduce = useReducedMotion() ?? false;
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    return (
        <motion.div
            ref={ref}
            onPointerMove={(e) => {
                const r = ref.current?.getBoundingClientRect();
                if (!r) return;
                mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
                my.set(((e.clientY - r.top) / r.height) * 2 - 1);
            }}
            onPointerLeave={() => {
                mx.set(0);
                my.set(0);
            }}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            className="relative aspect-[4/5] w-full"
        >
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-custom-purple/8 blur-[100px]" />
            {NODES.map((node) => (
                <NodeChip key={node.name} node={node} mx={mx} my={my} reduce={reduce} />
            ))}
        </motion.div>
    );
}

export default function Home() {

    return (
        <section
            id="home"
            className="relative flex min-h-[88svh] scroll-mt-24 flex-col justify-center overflow-hidden pt-24 pb-16 md:pt-28"
        >
            {/* decorative kbach backdrop */}
            <KbachPattern className="pointer-events-none opacity-40 absolute -top-24 left-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 text-custom-purple/[0.07] [-webkit-mask-image:radial-gradient(60%_55%_at_45%_40%,#000,transparent_72%)] [mask-image:radial-gradient(60%_55%_at_45%_40%,#000,transparent_72%)]" />

            {/* pka romdoul emblem — top-left flourish */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.5, rotate: -35 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.35, duration: 1, ease: EASE }}
                className="pointer-events-none absolute top-3 left-3 z-0 hidden w-12 opacity-80 md:block lg:top-5 lg:left-7 lg:w-16"
            >
                <PkaRomdoulHeroOne className="h-auto w-full drop-shadow-[0_4px_20px_rgba(194,156,37,0.25)]" />
            </motion.div>


            {/* decorative naga — cropped into the bottom-right corner */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 24, y: 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 1.1, ease: EASE }}
                className="pointer-events-none absolute right-0 bottom-0 z-999! hidden h-[clamp(6rem,22vh,20rem)] w-[clamp(5rem,12vw,15rem)] text-white/6  md:block"
            >
                <NagaHero className="absolute opacity-5 z-50 right-0 bottom-0 h-auto w-full" />
            </motion.div>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
                <div className="max-w-2xl">
                    <motion.span
                        custom={0.05}
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-snow/70"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to new projects
                    </motion.span>

                    <h1 className="mt-7 font-bold leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,6rem)]">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18, duration: 0.5, ease: EASE }}
                            className="mb-2 block text-base font-medium tracking-normal text-snow/40 md:text-lg"
                        >
                            Hi, I&apos;m
                        </motion.span>
                        <NameHeadline />
                    </h1>

                    <RoleLine
                        className="mt-5 text-xl font-medium text-snow/85 md:text-2xl"
                        delay={0.95}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 1.25, duration: 0.7, ease: EASE }}
                        className="mt-5 max-w-xl text-sm leading-7 text-snow/50 md:text-base md:leading-8"
                    >
                        I build responsive, accessible web apps where thoughtful design meets
                        solid engineering.
                    </motion.p>

                    <motion.div
                        custom={1.45}
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        className="mt-9 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href="#experience"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                        >
                            View my work
                            <ArrowRight
                                size={16}
                                color="currentColor"
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-snow/80 transition-colors hover:border-white/40 hover:text-white"
                        >
                            Get in touch
                        </a>
                    </motion.div>

                    <motion.dl
                        custom={1.6}
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6"
                    >
                        {FACTS.map(({ label, value }) => (
                            <div key={label}>
                                <dt className="text-xs uppercase tracking-wide text-snow/35">
                                    {label}
                                </dt>
                                <dd className="mt-1 text-sm font-medium text-snow/80">{value}</dd>
                            </div>
                        ))}
                    </motion.dl>

                    {/* compact tech row — mobile / tablet only */}
                    <motion.ul
                        custom={1.75}
                        initial="hidden"
                        animate="show"
                        variants={rise}
                        className="mt-8 flex flex-wrap items-center gap-2 lg:hidden"
                    >
                        {TECH.map(({ name, Icon }) => (
                            <li
                                key={name}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-2.5 py-1.5 text-xs text-snow/60"
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                {name}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                {/* tech constellation — desktop only */}
                <div className="hidden lg:block">
                    <TechConstellation />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 mx-auto hidden w-full max-w-7xl px-4 sm:px-6 md:block lg:px-8">
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="pointer-events-auto inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-snow/35 transition-colors hover:text-snow/70"
                >
                    <ArrowDown2 size={14} color="currentColor" className="animate-nudge" />
                    Scroll
                </motion.a>
            </div>
        </section>
    );
}
