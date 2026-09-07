import { motion, useReducedMotion, type Variants } from "motion/react";
import me from "@assets/images/me.png";
import PkaRomdoulHeroOne from "@svg/PkaRomdoulHeroOne";
import LotusTwo from "@svg/LotusTwo";
import KbachPka from "@svg/KbachPka";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: EASE },
    }),
};

const STACK: { group: string; items: string[] }[] = [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "NestJS", "Express", "Laravel"] },
    { group: "Design", items: ["Figma", "UI / UX", "Photoshop", "Illustrator"] },
];

const reveal = {
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, margin: "-80px" },
    variants: rise,
};

export default function About() {
    const reduce = useReducedMotion();

    return (
        <section id="about" className="relative mt-10 scroll-mt-24 md:mt-28">
            {/* decorative pka romdoul — large, faint, slowly turning behind the heading */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-12 -left-8 -z-10 hidden w-56 text-[#EAC655] opacity-[0.05] md:block lg:-top-20 lg:w-72"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <KbachPka className="h-auto w-full" />
            </motion.div>

            {/* smaller pka, bottom-right, drifting */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute right-0 -bottom-8 -z-10 hidden w-24 opacity-[0.07] lg:block"
                animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
                <LotusTwo className="h-auto w-full" />
            </motion.div>

            <motion.h1 {...reveal} custom={0} className="text-2xl font-bold lg:text-4xl">
                About
            </motion.h1>

            <div className="mt-6 grid gap-10 md:mt-10 md:grid-cols-[1.45fr_1fr] md:gap-14">
                <div>
                    <motion.p
                        {...reveal}
                        custom={1}
                        className="max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
                    >
                        I&apos;m a fullstack developer and UI/UX designer based in Cambodia. My
                        path started in design, Photoshop, Illustrator and Figma between 2019
                        and 2021, before moving into web development full time in 2021.
                    </motion.p>
                    <motion.p
                        {...reveal}
                        custom={2}
                        className="mt-4 max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
                    >
                        Now I work across the whole stack: React and Next.js on the front end,
                        NestJS, Express and Laravel on the back end. Designing the interface and
                        shipping the code myself means the details survive the trip from Figma to
                        production.
                    </motion.p>

                    <motion.div
                        {...reveal}
                        custom={3}
                        className="mt-9 space-y-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]"
                    >
                        {STACK.map(({ group, items }) => (
                            <div
                                key={group}
                                className="flex flex-col gap-2.5 bg-black/20 p-3.5 sm:flex-row sm:items-center sm:gap-5 md:px-4 md:py-3.5"
                            >
                                <span className="flex shrink-0 items-center gap-2 text-xs font-semibold tracking-wide text-snow/35 uppercase sm:w-24">
                                    <span className="h-1 w-1 rounded-full bg-custom-purple/70" />
                                    {group}
                                </span>
                                <ul className="flex flex-wrap gap-2">
                                    {items.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-snow/75 transition-colors hover:border-custom-purple/50 hover:text-white"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    {...reveal}
                    custom={2}
                    className="relative w-full max-w-sm md:justify-self-end"
                >
                    <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-custom-purple/12 blur-3xl" />
                    <img
                        src={me}
                        alt="Orn Bona"
                        className="w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                    />

                    {/* pka romdoul sticker on the corner */}
                    <motion.div
                        aria-hidden
                        className="absolute -top-4 -right-2 w-14 lg:-top-6 lg:-right-4 lg:w-18"
                        initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: -45 }}
                        whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: 12 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 13 }}
                    >
                        <motion.div
                            className="drop-shadow-[0_8px_22px_rgba(194,156,37,0.4)]"
                            animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, 6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <PkaRomdoulHeroOne className="h-auto w-full" />
                        </motion.div>
                    </motion.div>

                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-snow/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-custom-purple" />
                        On the road, Phnom Aural in Cambodia
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
