import type { ComponentType, SVGProps } from "react";
import {
    ArrowRight,
    Calendar,
    Category,
    NotificationBing,
    RouteSquare,
    SecurityUser,
    Shop,
    Ticket,
    UserOctagon,
    type Icon,
} from "iconsax-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import NextJSLogo from "@svg/NextJS";
import NestJSLogo from "@svg/NestJS";
import PostgreSQLLogo from "@svg/PostgreSQL";
import PkaRomdoulLinear from "@svg/PkaRomdoulLinear";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: EASE },
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
    tagline: string;
    blurb: string;
    Icon: Icon;
    features: { text: string; Icon: Icon }[];
    stack: string[];
    href?: string;
};

const PROJECTS: Project[] = [
    {
        name: "At Khmer",
        tagline: "Adventure trip booking",
        blurb: "A booking platform for adventure trips a client-facing site to browse and book, an admin dashboard to manage trips, and instant booking alerts pushed through a Telegram bot.",
        Icon: RouteSquare,
        features: [
            { Icon: Ticket, text: "Client browsing & booking flow" },
            { Icon: SecurityUser, text: "Admin dashboard for trips & bookings" },
            { Icon: NotificationBing, text: "Telegram bot booking notifications" },
        ],
        stack: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
        name: "Ptas Theap",
        tagline: "Wedding invites & vendor marketplace",
        blurb: "A landing platform pairing customizable wedding-invitation templates with a vendor marketplace, plus a vendor admin to publish and manage service listings.",
        Icon: Calendar,
        features: [
            { Icon: Category, text: "Invitation template gallery" },
            { Icon: Shop, text: "Vendor service marketplace" },
            { Icon: UserOctagon, text: "Vendor admin portal" },
        ],
        stack: ["Next.js", "NestJS", "PostgreSQL"],
    },
];

const STACK_LOGOS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    "Next.js": NextJSLogo,
    NestJS: NestJSLogo,
    PostgreSQL: PostgreSQLLogo,
};

export default function Portfolio() {
    const reduce = useReducedMotion();

    return (
        <section id="portfolio" className="relative mt-12 scroll-mt-24 md:mt-28">
            {/* decorative pka romdoul — faint, slowly turning behind the heading */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-10 right-0 -z-10 hidden w-28 opacity-[0.08] md:block lg:w-36"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
            >
                <PkaRomdoulLinear className="h-auto w-full" />
            </motion.div>

            <motion.h1 {...reveal} custom={0} className="text-2xl font-bold lg:text-4xl">
                Portfolio
            </motion.h1>

            <motion.p
                {...reveal}
                custom={1}
                className="mt-4 max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
            >
                A selection of things I&apos;ve designed and built end to end, interface,
                API, and database.
            </motion.p>

            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
                {PROJECTS.map((project, i) => {
                    const Wrapper = project.href ? "a" : "div";
                    return (
                        <motion.div key={project.name} {...reveal} custom={i + 2} className="h-full">
                            <Wrapper
                                {...(project.href
                                    ? { href: project.href, target: "_blank", rel: "noreferrer" }
                                    : {})}
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-custom-purple/40 hover:bg-white/[0.035] md:p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-custom-purple/25 bg-custom-purple/12 text-custom-purple">
                                        <project.Icon size={20} variant="Bold" color="currentColor" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                            <h2 className="text-base font-semibold text-white md:text-lg">
                                                {project.name}
                                            </h2>
                                            {project.href && (
                                                <ArrowRight
                                                    size={18}
                                                    color="currentColor"
                                                    className="shrink-0 text-snow/40 transition-all group-hover:translate-x-1 group-hover:text-custom-purple"
                                                />
                                            )}
                                        </div>
                                        <p className="mt-0.5 text-xs font-medium tracking-wide text-custom-purple/80 uppercase">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-7 text-snow/55">
                                    {project.blurb}
                                </p>

                                <ul className="mt-4 space-y-2">
                                    {project.features.map(({ Icon: FeatureIcon, text }) => (
                                        <li
                                            key={text}
                                            className="flex items-center gap-2.5 text-sm text-snow/70"
                                        >
                                            <FeatureIcon
                                                size={16}
                                                color="currentColor"
                                                className="shrink-0 text-custom-purple/70"
                                            />
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                                    {project.stack.map((tech) => {
                                        const Logo = STACK_LOGOS[tech];
                                        return (
                                            <li
                                                key={tech}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-snow/70"
                                            >
                                                {Logo && <Logo className="h-3.5 w-3.5 shrink-0" />}
                                                {tech}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
