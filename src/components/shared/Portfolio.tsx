import { ArrowRight } from "iconsax-react";
import { motion, type Variants } from "motion/react";

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
};

const reveal = {
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, margin: "-80px" },
    variants: rise,
};

type Project = {
    name: string;
    blurb: string;
    tags: string[];
    href?: string;
};

// TODO: replace these placeholders with real work
const PROJECTS: Project[] = [
    {
        name: "Project One",
        blurb: "Short description of what it is, the problem it solved, and your role on it.",
        tags: ["Next.js", "NestJS", "Figma"],
        href: undefined,
    },
    {
        name: "Project Two",
        blurb: "Short description of what it is, the problem it solved, and your role on it.",
        tags: ["React", "TypeScript", "Tailwind"],
        href: undefined,
    },
    {
        name: "Project Three",
        blurb: "Short description of what it is, the problem it solved, and your role on it.",
        tags: ["Laravel", "UI / UX"],
        href: undefined,
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="mt-12 scroll-mt-24 md:mt-28">
            <motion.h1 {...reveal} custom={0} className="text-2xl font-bold lg:text-4xl">
                Portfolio
            </motion.h1>

            <motion.p
                {...reveal}
                custom={1}
                className="mt-4 max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
            >
                A selection of things I&apos;ve designed and built.
            </motion.p>

            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
                {PROJECTS.map((project, i) => {
                    const Wrapper = project.href ? "a" : "div";
                    return (
                        <motion.div key={project.name} {...reveal} custom={i + 2}>
                            <Wrapper
                                {...(project.href
                                    ? {
                                          href: project.href,
                                          target: "_blank",
                                          rel: "noreferrer",
                                      }
                                    : {})}
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-custom-purple/50 md:p-6"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <h2 className="text-base font-semibold text-white md:text-lg">
                                        {project.name}
                                    </h2>
                                    {project.href && (
                                        <ArrowRight
                                            size={18}
                                            color="currentColor"
                                            className="mt-0.5 shrink-0 text-snow/40 transition-all group-hover:translate-x-1 group-hover:text-custom-purple"
                                        />
                                    )}
                                </div>

                                <p className="mt-2 text-sm leading-7 text-snow/55">
                                    {project.blurb}
                                </p>

                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-snow/70"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
