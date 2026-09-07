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

// TODO: replace with real contact details
const EMAIL = "hello@example.com";
const SOCIALS: { label: string; href: string }[] = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Telegram", href: "#" },
];

export default function Contact() {
    return (
        <section id="contact" className="mt-16 scroll-mt-24 md:mt-28">
            <motion.h1 {...reveal} custom={0} className="text-2xl font-bold lg:text-4xl">
                Contact
            </motion.h1>

            <motion.p
                {...reveal}
                custom={1}
                className="mt-4 max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
            >
                Have a project in mind or just want to say hi? I&apos;m open to new work.
            </motion.p>

            <motion.a
                {...reveal}
                custom={2}
                href={`mailto:${EMAIL}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
                {EMAIL}
                <ArrowRight
                    size={16}
                    color="currentColor"
                    className="transition-transform group-hover:translate-x-1"
                />
            </motion.a>

            <motion.ul
                {...reveal}
                custom={3}
                className="mt-8 flex flex-wrap gap-2"
            >
                {SOCIALS.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-snow/70 transition-colors hover:border-custom-purple/50 hover:text-white"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </motion.ul>
        </section>
    );
}
