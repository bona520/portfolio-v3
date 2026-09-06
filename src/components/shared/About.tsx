import { motion, type Variants } from "motion/react";
import me from "@assets/images/me.png";

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
    return (
        <section id="about" className="mt-10 scroll-mt-24 md:mt-28">
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

                    <motion.div {...reveal} custom={3} className="mt-9 space-y-5">
                        {STACK.map(({ group, items }) => (
                            <div
                                key={group}
                                className="flex flex-col gap-2.5 sm:flex-row sm:items-baseline sm:gap-5"
                            >
                                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-snow/35 sm:w-20 sm:pt-1.5">
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

                <motion.div {...reveal} custom={2} className="relative w-full max-w-sm md:justify-self-end">
                    <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-custom-purple/10 blur-2xl" />
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <img
                            src={me}
                            alt="Orn Bona"
                            className="aspect-[4/5] w-full object-cover"
                        />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-snow/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-custom-purple" />
                        On the road, somewhere in Cambodia
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
